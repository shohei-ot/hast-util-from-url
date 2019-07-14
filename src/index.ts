const { JSDOM } = require('jsdom')
const fromDOM = require('hast-util-from-dom')
const getResponseBody = require('./proxy/get-response-body')

module.exports = async function(url: string) {
  let body = ''
  try {
    body = await getResponseBody(url)
  } catch (e) {
    console.log('Error')
    console.log(e.message)
  }
  // console.log(body)
  const { window } = new JSDOM(body)
  const hast = fromDOM(window.document)

  return hast
}
