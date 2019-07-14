const http = require('http')
const https = require('https')

const isUrl = (url: string) => /^[a-z]+:\/\/.+$/.test(url)
const isHttps = (url: string) => isUrl(url) && /^https/.test(url)

module.exports = async function getResponseBody(url: string): Promise<string> {
  const client = isHttps(url) ? https : http
  const resp: string = await new Promise((resolve, reject) => {
    let buff: string = ''

    const req = client.request(url, (res: any) => {
      res.setEncoding('utf8')
      res.on('data', (chunk: string) => {
        buff += chunk
      })

      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error('not 200'))
        } else {
          resolve(buff)
        }
      })
    })
    req.end()
  })
  return resp
}
