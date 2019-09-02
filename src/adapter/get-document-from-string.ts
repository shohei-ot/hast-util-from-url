import isBrowser from 'is-in-browser'
import { JSDOM } from 'jsdom'

export const fromStringBrowser = (html: string) => {
  return new DOMParser().parseFromString(html, 'text/html')
}

export const fromStringNode = (html: string) => {
  const { window } = new JSDOM(html)
  return window.document
}

export default (html: string): Document => {
  if (isBrowser) {
    return fromStringBrowser(html)
  }
  return fromStringNode(html)
}
