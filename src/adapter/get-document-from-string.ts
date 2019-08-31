import isBrowser from 'is-in-browser'
import { JSDOM } from 'jsdom'

export default (html: string): Document => {
  if (isBrowser) {
    return new DOMParser().parseFromString(html, 'text/html')
  }
  const { window } = new JSDOM(html)
  return window.document
}
