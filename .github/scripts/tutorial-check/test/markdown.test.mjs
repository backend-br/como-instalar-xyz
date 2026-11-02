import assert from 'node:assert/strict'
import test from 'node:test'
import { MarkdownDocument } from '../markdown.mjs'

test('ignores headings inside code fences', () => {
  // Given a document with a shell comment inside a fenced block
  const document = new MarkdownDocument(
    ['# Título', '', '```bash', '# comentário', '```', '', '## Requisitos'].join('\n'),
  )

  // When the headings are read
  const headings = document.headings.map((heading) => heading.text)

  // Then only the headings outside the fence are returned
  assert.deepEqual(headings, ['Título', 'Requisitos'])
})

test('records the language of each code fence', () => {
  // Given a document with a fence with a language and a fence without one
  const document = new MarkdownDocument(['```bash', 'ls', '```', '', '```', 'ls', '```'].join('\n'))

  // When the fences are read
  const languages = document.fences.map((fence) => fence.info)

  // Then each fence keeps its info string
  assert.deepEqual(languages, ['bash', ''])
})

test('reads link targets with parentheses', () => {
  // Given a link whose target has balanced parentheses
  const document = new MarkdownDocument('[Pacman](https://wiki.archlinux.org/title/Pacman_(Portugu%C3%AAs))')

  // When the links are read
  const targets = document.links.map((link) => link.target)

  // Then the whole target is kept
  assert.deepEqual(targets, ['https://wiki.archlinux.org/title/Pacman_(Portugu%C3%AAs)'])
})

test('ignores links inside inline code', () => {
  // Given a line with a link written inside inline code
  const document = new MarkdownDocument('Use `[Ubuntu](...)` como texto do link.')

  // When the links are read
  const links = document.links

  // Then no link is returned
  assert.deepEqual(links, [])
})

test('returns the lines of a section up to the next section', () => {
  // Given a document with a references section followed by another section
  const document = new MarkdownDocument(
    ['## Referências', '- [Docker](https://docs.docker.com/)', '## Outra'].join('\n'),
  )

  // When the lines of the references section are read
  const lines = document.linesOfSection('Referências').map((line) => line.text)

  // Then only the lines inside that section are returned
  assert.deepEqual(lines, ['- [Docker](https://docs.docker.com/)'])
})
