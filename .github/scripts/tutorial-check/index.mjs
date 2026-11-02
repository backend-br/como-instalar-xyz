import { readdir, readFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { checkRepository, report } from './check.mjs'

const ROOT = fileURLToPath(new URL('../../../', import.meta.url))
const TUTORIALS_DIRECTORY = 'tutoriais'

const toRepositoryPath = (absolute) => relative(ROOT, absolute).split(sep).join('/')

const rootFiles = async () => {
  const entries = await readdir(ROOT, { withFileTypes: true })

  return entries.filter((entry) => entry.isFile()).map((entry) => join(ROOT, entry.name))
}

const tutorialFiles = async () => {
  const entries = await readdir(join(ROOT, TUTORIALS_DIRECTORY), { withFileTypes: true, recursive: true })

  return entries.filter((entry) => entry.isFile()).map((entry) => join(entry.parentPath, entry.name))
}

const files = new Map()

for (const absolute of [...(await rootFiles()), ...(await tutorialFiles())]) {
  files.set(toRepositoryPath(absolute), await readFile(absolute, 'utf8'))
}

const lines = report(checkRepository(files))

for (const line of lines) {
  console.log(line)
}

if (lines.length > 0) {
  process.exitCode = 1
}
