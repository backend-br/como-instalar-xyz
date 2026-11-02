import { linksIn } from './markdown.mjs'

const REQUIRED_SECTIONS = ['Requisitos', 'Instalação', 'Verificação', 'Referências']
const SECTION_ORDER = ['Requisitos', 'Instalação', 'Verificação', 'Desinstalação', 'Referências']
const EXPECTED_ORDER = 'Requisitos, Instalação, Verificação, Desinstalação (optional), Referências'
const REFERENCES_SECTION = 'Referências'
const TUTORIALS_SECTION = 'Tutoriais'
const URL = /https?:\/\/|www\./i
const DEEPEST_HEADING_LEVEL = 3
const VAGUE_LABELS = new Set(['aqui', 'clique aqui', 'link', 'este link', 'neste link', 'here', 'click here'])

const isNamed = (link) => !URL.test(link.label) && link.label.trim() !== ''

const withoutNamedLinks = (text) =>
  linksIn(text)
    .filter(isNamed)
    .reduce((remaining, link) => remaining.replace(`[${link.label}](${link.target})`, ''), text)

class TitleRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    const headings = repository.documentOf(path).headings
    const titles = headings.filter((heading) => heading.level === 1)

    if (titles.length === 0) {
      return ['the tutorial is missing its `#` title']
    }

    const problems = headings[0].level === 1 ? [] : ['the tutorial must start with its `#` title']

    return [
      ...problems,
      ...titles.slice(1).map((heading) => `extra \`#\` title: "${heading.text}" (line ${heading.number})`),
    ]
  }
}

class HeadingDepthRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    return repository
      .documentOf(path)
      .headings.filter((heading) => heading.level > DEEPEST_HEADING_LEVEL)
      .map(
        (heading) =>
          `\`${'#'.repeat(heading.level)}\` heading is not allowed: "${heading.text}" (line ${heading.number})`,
      )
  }
}

class IntroductionRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    const document = repository.documentOf(path)
    const [title] = document.headings.filter((heading) => heading.level === 1)
    const firstSection = document.headings.find((heading) => heading.level === 2)

    if (!title || !firstSection) {
      return []
    }

    return document.lines
      .filter((line) => line.number > title.number && line.number < firstSection.number && line.text.trim() !== '')
      .slice(0, 1)
      .map(
        (line) =>
          `text between the title and the first section, describe the tool in ${repository.toolReadmeOf(path)} (line ${line.number})`,
      )
  }
}

class ToolReadmeRule {
  appliesTo(path, repository) {
    return repository.isToolReadme(path)
  }

  problemsOf(path, repository) {
    const document = repository.documentOf(path)
    const headings = document.headings
    const [title] = headings.filter((heading) => heading.level === 1)
    const tutorials = headings.find((heading) => heading.level === 2 && heading.text === TUTORIALS_SECTION)

    if (!title) {
      return ['the tool README is missing its `#` title']
    }

    const description = document.lines.some(
      (line) => line.number > title.number && (!tutorials || line.number < tutorials.number) && line.text.trim() !== '',
    )

    return [
      ...(description ? [] : ['the tool README is missing the description under its title']),
      ...(tutorials ? [] : [`the tool README is missing the \`## ${TUTORIALS_SECTION}\` section`]),
    ]
  }
}

class SectionRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    const sections = repository
      .documentOf(path)
      .headings.filter((heading) => heading.level === 2)
      .map((heading) => heading.text)

    const unknown = sections
      .filter((section) => !SECTION_ORDER.includes(section))
      .map((section) => `section \`## ${section}\` is not part of the template`)

    const repeated = [...new Set(sections.filter((section, index) => sections.indexOf(section) !== index))].map(
      (section) => `section \`## ${section}\` is repeated`,
    )

    const missing = REQUIRED_SECTIONS.filter((section) => !sections.includes(section)).map(
      (section) => `missing section \`## ${section}\``,
    )

    const positions = sections.map((section) => SECTION_ORDER.indexOf(section)).filter((position) => position >= 0)
    const outOfOrder = positions.some((position, index) => index > 0 && position < positions[index - 1])
      ? [`sections out of order, the expected order is: ${EXPECTED_ORDER}`]
      : []

    return [...unknown, ...repeated, ...missing, ...outOfOrder]
  }
}

class FenceLanguageRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    return repository
      .documentOf(path)
      .fences.filter((fence) => fence.info === '')
      .map((fence) => `code block without a language (line ${fence.number})`)
  }
}

class BareReferenceRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    return repository
      .documentOf(path)
      .linesOfSection(REFERENCES_SECTION)
      .filter((line) => URL.test(withoutNamedLinks(line.prose)))
      .map((line) => `bare URL in Referências, use a named link (line ${line.number})`)
  }
}

class VagueLinkRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    return repository
      .documentOf(path)
      .links.filter((link) => VAGUE_LABELS.has(link.label.trim().toLowerCase()))
      .map((link) => `vague link text "${link.label}", name the page it opens (line ${link.number})`)
  }
}

class BrokenLinkRule {
  appliesTo() {
    return true
  }

  problemsOf(path, repository) {
    return repository
      .localLinksOf(path)
      .filter((link) => !repository.exists(link.resolved))
      .map((link) => `link to a missing file: ${link.target} (line ${link.number})`)
  }
}

class LinkedTutorialRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    const readme = repository.toolReadmeOf(path)

    if (!repository.exists(readme)) {
      return [`tool README ${readme} does not exist`]
    }

    return repository.isLinkedFrom([readme], path) ? [] : [`tutorial not linked from ${readme}`]
  }
}

export const rules = [
  new TitleRule(),
  new IntroductionRule(),
  new ToolReadmeRule(),
  new HeadingDepthRule(),
  new SectionRule(),
  new FenceLanguageRule(),
  new BareReferenceRule(),
  new VagueLinkRule(),
  new BrokenLinkRule(),
  new LinkedTutorialRule(),
]

export const problemsOf = (rules, path, repository) =>
  rules
    .filter((rule) => rule.appliesTo(path, repository))
    .flatMap((rule) => rule.problemsOf(path, repository).map((message) => ({ path, message })))
