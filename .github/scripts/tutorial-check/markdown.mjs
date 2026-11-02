const FENCE = /^\s*(`{3,}|~{3,})(.*)$/
const HEADING = /^ {0,3}(#{1,6})\s+(.*?)(?:\s+#+)?\s*$/
const LINK = /\[([^\]]*)\]\(((?:[^()\s]|\([^()\s]*\))+)(?:\s+"[^"]*")?\)/g
const CODE_SPAN = /`[^`]*`/g

class Line {
  constructor(text, number) {
    this.text = text
    this.number = number
  }

  get prose() {
    return this.text.replace(CODE_SPAN, '')
  }
}

class Fence {
  constructor(marker, info, number) {
    this.marker = marker
    this.info = info
    this.number = number
  }

  closedBy(text) {
    const match = FENCE.exec(text)

    return (
      Boolean(match) &&
      match[2].trim() === '' &&
      match[1][0] === this.marker[0] &&
      match[1].length >= this.marker.length
    )
  }
}

const scan = (content) => {
  const lines = []
  const fences = []
  let open = null

  content.split('\n').forEach((text, index) => {
    const number = index + 1

    if (open) {
      if (open.closedBy(text)) {
        open = null
      }
      return
    }

    const match = FENCE.exec(text)

    if (match) {
      open = new Fence(match[1], match[2].trim(), number)
      fences.push(open)
      return
    }

    lines.push(new Line(text, number))
  })

  return { lines, fences }
}

export const linksIn = (text) => [...text.matchAll(LINK)].map(([, label, target]) => ({ label, target }))

export class MarkdownDocument {
  constructor(content) {
    const { lines, fences } = scan(content)

    this.lines = lines
    this.fences = fences
  }

  get headings() {
    return this.lines
      .map((line) => ({ match: HEADING.exec(line.text), number: line.number }))
      .filter(({ match }) => match)
      .map(({ match, number }) => ({ level: match[1].length, text: match[2], number }))
  }

  get links() {
    return this.lines.flatMap((line) => linksIn(line.prose).map((link) => ({ ...link, number: line.number })))
  }

  linesOfSection(title) {
    const headings = this.headings
    const start = headings.find((heading) => heading.level === 2 && heading.text === title)

    if (!start) {
      return []
    }

    const end = headings.find((heading) => heading.number > start.number && heading.level <= 2)

    return this.lines.filter((line) => line.number > start.number && (!end || line.number < end.number))
  }
}
