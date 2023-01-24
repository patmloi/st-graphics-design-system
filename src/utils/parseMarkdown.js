import { marked } from 'marked'

/**
 *
 * @param {string} src
 * @returns
 */
const parseMarkdown = (src) => marked.parseInline(src)

export default parseMarkdown
