import assert from 'node:assert/strict'
import test from 'node:test'
import { checkRepository, report } from '../check.mjs'

const TUTORIAL = 'tutoriais/docker/linux/ubuntu.md'

const tutorialWith = ({
  title = '# Docker no Ubuntu',
  sections = ['Requisitos', 'Instalação', 'Verificação', 'Referências'],
  installation = ['### 1. Instale o Docker', '', '```bash', 'sudo apt-get install docker-ce', '```'],
  references = ['- [Documentação oficial do Docker](https://docs.docker.com/)'],
} = {}) =>
  [
    title,
    '',
    ...sections.flatMap((section) => {
      const body = { Instalação: installation, Referências: references }[section] ?? ['Nenhum.']

      return ['', `## ${section}`, '', ...body]
    }),
    '',
  ].join('\n')

const repositoryWith = (entries) => new Map(Object.entries(entries))

const TOOL_README = '# Docker\n\nPlataforma de containers.\n\n## Tutoriais\n\n- [Ubuntu](./linux/ubuntu.md)\n'

const validRepository = (tutorial = tutorialWith()) =>
  repositoryWith({
    'README.md': `[Ubuntu](${TUTORIAL})`,
    'tutoriais/docker/README.md': TOOL_README,
    [TUTORIAL]: tutorial,
  })

const messagesOf = (problems) => problems.map((problem) => problem.message)

test('reports nothing for a tutorial that follows the template', () => {
  // Given a repository with a tutorial that follows the template and is linked from the README
  const files = validRepository()

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('accepts the optional uninstall section before the references', () => {
  // Given a tutorial with the uninstall section
  const files = validRepository(
    tutorialWith({ sections: ['Requisitos', 'Instalação', 'Verificação', 'Desinstalação', 'Referências'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('reports a missing section', () => {
  // Given a tutorial without the verification section
  const files = validRepository(tutorialWith({ sections: ['Requisitos', 'Instalação', 'Referências'] }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the missing section is reported
  assert.deepEqual(messagesOf(problems), ['missing section `## Verificação`'])
})

test('reports a section that is not in the template', () => {
  // Given a tutorial with an extra section
  const files = validRepository(
    tutorialWith({ sections: ['Requisitos', 'Instalação', 'Verificação nutela', 'Verificação', 'Referências'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the extra section is reported
  assert.deepEqual(messagesOf(problems), ['section `## Verificação nutela` is not part of the template'])
})

test('reports a repeated section', () => {
  // Given a tutorial with the installation section twice
  const files = validRepository(
    tutorialWith({ sections: ['Requisitos', 'Instalação', 'Instalação', 'Verificação', 'Referências'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the repeated section is reported
  assert.deepEqual(messagesOf(problems), ['section `## Instalação` is repeated'])
})

test('reports sections out of order', () => {
  // Given a tutorial with the verification section before the installation
  const files = validRepository(tutorialWith({ sections: ['Requisitos', 'Verificação', 'Instalação', 'Referências'] }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the order is reported
  assert.deepEqual(messagesOf(problems), [
    'sections out of order, the expected order is: Requisitos, Instalação, Verificação, Desinstalação (optional), Referências',
  ])
})

test('reports an extra title', () => {
  // Given a tutorial with a second level one heading
  const files = validRepository(tutorialWith({ installation: ['# Dica', '', 'Texto.'] }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the extra title is reported
  assert.match(messagesOf(problems)[0], /^extra `#` title: "Dica"/)
})

test('reports a missing title', () => {
  // Given a tutorial that starts with a section instead of a title
  const files = validRepository(tutorialWith({ title: 'Docker no Ubuntu' }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the missing title is reported
  assert.deepEqual(messagesOf(problems), ['the tutorial is missing its `#` title'])
})

test('reports a level four heading', () => {
  // Given a tutorial with a level four heading inside the installation
  const files = validRepository(tutorialWith({ installation: ['#### Detalhe', '', 'Texto.'] }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the heading is reported
  assert.match(messagesOf(problems)[0], /^`####` heading is not allowed: "Detalhe"/)
})

test('ignores headings written inside code blocks', () => {
  // Given a tutorial with a shell comment that looks like a heading
  const files = validRepository(
    tutorialWith({ installation: ['```bash', '# Debian ou Ubuntu', 'apt-get update', '```'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('reports a code fence without a language', () => {
  // Given a tutorial with a code fence without a language
  const files = validRepository(tutorialWith({ installation: ['```', 'sudo apt-get install docker-ce', '```'] }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the fence is reported with its line
  assert.deepEqual(messagesOf(problems), ['code block without a language (line 10)'])
})

test('reports chained commands in a shell block', () => {
  // Given a tutorial that chains two commands on one line
  const files = validRepository(
    tutorialWith({ installation: ['```bash', 'sudo apt-get update && sudo apt-get install docker-ce', '```'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the chained line is reported
  assert.deepEqual(messagesOf(problems), ['chained commands, write one command per line (line 11)'])
})

test('accepts a semicolon inside quotes', () => {
  // Given a command whose argument carries a semicolon between quotes
  const files = validRepository(
    tutorialWith({
      installation: ['```bash', `php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"`, '```'],
    }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('does not check blocks that are not shell commands', () => {
  // Given a SQL block with statements ending in semicolons
  const files = validRepository(
    tutorialWith({ installation: ['```sql', 'CREATE DATABASE app; CREATE USER app;', '```'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('reports a bare URL in the references', () => {
  // Given a tutorial whose references list a bare URL
  const files = validRepository(tutorialWith({ references: ['- https://docs.docker.com/'] }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the bare URL is reported
  assert.match(messagesOf(problems)[0], /^bare URL in Referências/)
})

test('reports a link whose text does not name the page', () => {
  // Given a tutorial with a link whose text is "aqui"
  const files = validRepository(
    tutorialWith({ installation: ['Pesquise os pacotes [aqui](https://community.chocolatey.org/packages).'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the vague link is reported with its line
  assert.deepEqual(messagesOf(problems), ['vague link text "aqui", name the page it opens (line 10)'])
})

test('reports a reference link named after its own URL', () => {
  // Given a tutorial whose reference link uses the URL as its name
  const files = validRepository(
    tutorialWith({ references: ['- [https://docs.docker.com/](https://docs.docker.com/)'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the link is reported as a bare URL
  assert.match(messagesOf(problems)[0], /^bare URL in Referências/)
})

test('accepts a named reference link with parentheses in the URL', () => {
  // Given a tutorial whose reference link has parentheses in its target
  const files = validRepository(
    tutorialWith({ references: ['- [Pacman](https://wiki.archlinux.org/title/Pacman_(Portugu%C3%AAs))'] }),
  )

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('reports a README link to a file that does not exist', () => {
  // Given a README that links to a tutorial that is missing
  const files = repositoryWith({
    'README.md': `[Ubuntu](${TUTORIAL}) [Arch Linux](tutoriais/docker/linux/archlinux.md)`,
    'tutoriais/docker/README.md': TOOL_README,
    [TUTORIAL]: tutorialWith(),
  })

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the broken link is reported for the README
  assert.deepEqual(problems, [
    { path: 'README.md', message: 'link to a missing file: tutoriais/docker/linux/archlinux.md (line 1)' },
  ])
})

test('accepts a link to an existing directory', () => {
  // Given a README that links to the directory of a tool
  const files = repositoryWith({
    'README.md': `[Ubuntu](${TUTORIAL}) [Docker](tutoriais/docker)`,
    'tutoriais/docker/README.md': TOOL_README,
    [TUTORIAL]: tutorialWith(),
  })

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('reports a tutorial its tool README does not link to', () => {
  // Given a tool README that does not list the tutorial
  const files = repositoryWith({
    'README.md': `[Ubuntu](${TUTORIAL})`,
    'tutoriais/docker/README.md': '# Docker\n\nPlataforma de containers.\n\n## Tutoriais\n',
    [TUTORIAL]: tutorialWith(),
  })

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the tutorial is reported
  assert.deepEqual(problems, [{ path: TUTORIAL, message: 'tutorial not linked from tutoriais/docker/README.md' }])
})

test('reports a tutorial whose tool has no README', () => {
  // Given a tutorial without the README of its tool
  const files = repositoryWith({ 'README.md': `[Ubuntu](${TUTORIAL})`, [TUTORIAL]: tutorialWith() })

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the missing tool README is reported
  assert.deepEqual(problems, [{ path: TUTORIAL, message: 'tool README tutoriais/docker/README.md does not exist' }])
})

test('reports text between the title and the first section', () => {
  // Given a tutorial that describes the tool under its title
  const files = validRepository(tutorialWith({ title: '# Docker no Ubuntu\n\nO Docker cria containers.' }))

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the description is reported, pointing at the tool README
  assert.deepEqual(messagesOf(problems), [
    'text between the title and the first section, describe the tool in tutoriais/docker/README.md (line 3)',
  ])
})

test('reports a tool README without a description', () => {
  // Given a tool README with only its title and its tutorials
  const files = repositoryWith({
    'README.md': `[Ubuntu](${TUTORIAL})`,
    'tutoriais/docker/README.md': '# Docker\n\n## Tutoriais\n\n- [Ubuntu](./linux/ubuntu.md)\n',
    [TUTORIAL]: tutorialWith(),
  })

  // When the repository is checked
  const problems = checkRepository(files)

  // Then the missing description is reported
  assert.deepEqual(problems, [
    { path: 'tutoriais/docker/README.md', message: 'the tool README is missing the description under its title' },
  ])
})

test('accepts a tutorial linked only from its tool README', () => {
  // Given a tutorial linked from its tool README, which the README links to
  const files = repositoryWith({
    'README.md': '[Ubuntu](tutoriais/docker/README.md)',
    'tutoriais/docker/README.md': TOOL_README,
    [TUTORIAL]: tutorialWith(),
  })

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('does not treat the template nor the tool READMEs as tutorials', () => {
  // Given a repository with the template and a tool README that break the tutorial standard
  const files = repositoryWith({
    'README.md': '# Como instalar XYZ',
    'tutoriais/TEMPLATE.md': '# Ferramenta no Sistema\n\n```\ncomando\n```\n',
    'tutoriais/docker/README.md': '# Docker\n\nPlataforma de containers.\n\n## Tutoriais\n',
  })

  // When the repository is checked
  const problems = checkRepository(files)

  // Then no problem is reported
  assert.deepEqual(problems, [])
})

test('formats each problem as path and message', () => {
  // Given a list of problems
  const problems = [{ path: TUTORIAL, message: 'missing section `## Verificação`' }]

  // When the problems are reported
  const lines = report(problems)

  // Then each line starts with the path of the file
  assert.deepEqual(lines, [`${TUTORIAL}: missing section \`## Verificação\``])
})
