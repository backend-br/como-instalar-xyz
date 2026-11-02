import { linksIn } from './markdown.mjs'

const REQUIRED_SECTIONS = ['Requisitos', 'Instalação', 'Verificação', 'Referências']
const SECTION_ORDER = ['Requisitos', 'Instalação', 'Verificação', 'Desinstalação', 'Referências']
const EXPECTED_ORDER = 'Requisitos, Instalação, Verificação, Desinstalação (opcional), Referências'
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
      return ['falta o título `#` do tutorial']
    }

    const problems = headings[0].level === 1 ? [] : ['o tutorial deve começar pelo título `#`']

    return [
      ...problems,
      ...titles.slice(1).map((heading) => `título \`#\` extra: "${heading.text}" (linha ${heading.number})`),
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
          `título \`${'#'.repeat(heading.level)}\` não é permitido: "${heading.text}" (linha ${heading.number})`,
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
      .map((section) => `seção \`## ${section}\` não faz parte do modelo`)

    const repeated = [...new Set(sections.filter((section, index) => sections.indexOf(section) !== index))].map(
      (section) => `seção \`## ${section}\` repetida`,
    )

    const missing = REQUIRED_SECTIONS.filter((section) => !sections.includes(section)).map(
      (section) => `falta a seção \`## ${section}\``,
    )

    const positions = sections.map((section) => SECTION_ORDER.indexOf(section)).filter((position) => position >= 0)
    const outOfOrder = positions.some((position, index) => index > 0 && position < positions[index - 1])
      ? [`seções fora de ordem, a ordem esperada é: ${EXPECTED_ORDER}`]
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
      .map((fence) => `bloco de código sem linguagem (linha ${fence.number})`)
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
      .map((line) => `URL solta em Referências, use um link com nome (linha ${line.number})`)
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
      .map((link) => `link para arquivo inexistente: ${link.target} (linha ${link.number})`)
  }
}

class LinkedTutorialRule {
  appliesTo(path, repository) {
    return repository.isTutorial(path)
  }

  problemsOf(path, repository) {
    return repository.isTutorialLinked(path)
      ? []
      : [`tutorial sem link no README.md nem em ${repository.toolReadmeOf(path)}`]
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
