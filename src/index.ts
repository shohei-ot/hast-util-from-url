import getResponseBody from './proxy/get-response-body'
import getDocumentFromString from './adapter/get-document-from-string'

const fromDOM = require('hast-util-from-dom')

module.exports = async function(url: string) {
  const responseBody = await getResponseBody(url)
  const docm = getDocumentFromString(responseBody)
  return fromDOM(docm)
}
