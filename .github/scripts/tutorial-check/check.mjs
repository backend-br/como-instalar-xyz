import { Repository } from './repository.mjs'
import { problemsOf, rules } from './rules.mjs'

export const checkRepository = (files) => {
  const repository = new Repository(files)

  return repository.markdownPaths.flatMap((path) => problemsOf(rules, path, repository))
}

export const report = (problems) => problems.map((problem) => `${problem.path}: ${problem.message}`)
