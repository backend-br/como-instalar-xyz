import { linksIn } from './markdown.mjs'

const REQUIRED_SECTIONS = ['Requisitos', 'Instalação', 'Verificação', 'Referências']
const SECTION_ORDER = ['Requisitos', 'Instalação', 'Verificação', 'Desinstalação', 'Referências']
const EXPECTED_ORDER = 'Requisitos, Instalação, Verificação, Desinstalação (optional), Referências'
const REFERENCES_SECTION = 'Referências'
const URL = /https?:\/\/|www\./i
const DEEPEST_HEADING_LEVEL = 3

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
    return repository.isTutorialLinked(path)
      ? []
      : [`tutorial not linked from README.md or ${repository.toolReadmeOf(path)}`]
  }
}

export const rules = [
  new TitleRule(),
  new HeadingDepthRule(),
  new SectionRule(),
  new FenceLanguageRule(),
  new BareReferenceRule(),
  new BrokenLinkRule(),
  new LinkedTutorialRule(),
]

export const problemsOf = (rules, path, repository) =>
  rules
    .filter((rule) => rule.appliesTo(path, repository))
    .flatMap((rule) => rule.problemsOf(path, repository).map((message) => ({ path, message })))
