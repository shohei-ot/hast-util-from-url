const { JSDOM } = require('jsdom')
const fromDOM = require('hast-util-from-dom')
const getResponseBody = require('./proxy/get-response-body')

module.exports = async function(url: string) {
  const body = await getResponseBody(url)
  const { window } = new JSDOM(body)
  return fromDOM(window.document)
}
