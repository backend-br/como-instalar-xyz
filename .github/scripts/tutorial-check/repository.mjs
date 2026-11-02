import { posix } from 'node:path'
import { MarkdownDocument } from './markdown.mjs'

const ROOT_README = 'README.md'
const TUTORIALS_DIRECTORY = 'tutoriais'
const README = 'README.md'
const EXTERNAL_TARGET = /^([a-z][a-z0-9+.-]*:|\/\/|#)/i

const decode = (target) => {
  try {
    return decodeURIComponent(target)
  } catch {
    return target
  }
}

export class Repository {
  constructor(files) {
    this.files = files
    this.documents = new Map()
  }

  get paths() {
    return [...this.files.keys()].sort()
  }

  get markdownPaths() {
    return this.paths.filter((path) => path === ROOT_README || this.isUnderTutorials(path))
  }

  get tutorialPaths() {
    return this.paths.filter((path) => this.isTutorial(path))
  }

  isUnderTutorials(path) {
    return path.startsWith(`${TUTORIALS_DIRECTORY}/`) && path.endsWith('.md')
  }

  isTutorial(path) {
    const segments = path.split('/')

    return this.isUnderTutorials(path) && segments.length >= 3 && segments.at(-1) !== README
  }

  isToolReadme(path) {
    const segments = path.split('/')

    return this.isUnderTutorials(path) && segments.length === 3 && segments.at(-1) === README
  }

  toolReadmeOf(path) {
    const [, tool] = path.split('/')

    return `${TUTORIALS_DIRECTORY}/${tool}/${README}`
  }

  documentOf(path) {
    if (!this.documents.has(path)) {
      this.documents.set(path, new MarkdownDocument(this.files.get(path) ?? ''))
    }

    return this.documents.get(path)
  }

  exists(path) {
    return this.files.has(path) || this.paths.some((candidate) => candidate.startsWith(`${path}/`))
  }

  localLinksOf(path) {
    return this.documentOf(path)
      .links.filter((link) => !EXTERNAL_TARGET.test(link.target))
      .map((link) => ({ ...link, resolved: this.resolve(path, link.target) }))
  }

  resolve(path, target) {
    const [withoutFragment] = target.split(/[#?]/)
    const decoded = decode(withoutFragment)
    const resolved = decoded.startsWith('/')
      ? posix.normalize(decoded.slice(1))
      : posix.join(posix.dirname(path), decoded)

    return resolved.replace(/\/$/, '')
  }

  isLinkedFrom(sources, path) {
    return sources
      .filter((source) => this.files.has(source))
      .some((source) => this.localLinksOf(source).some((link) => link.resolved === path))
  }
}
