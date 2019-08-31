import isBrowser from 'is-in-browser'
import axios from 'axios'

const http = require('http')
const https = require('https')
const isUrl = require('is-url')

const isHttps = (url: string) => isUrl(url) && /^https/.test(url)

export const getResponseBodyNodeJs = async (url: string): Promise<string> => {
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

export const getResponseBodyBrowser = async (url: string): Promise<string> => {
  const response = await axios.get(url, {
    responseType: 'text'
  })
  return response.data
}

export default (url: string) => {
  if (isBrowser) {
    return getResponseBodyBrowser(url)
  }
  return getResponseBodyNodeJs(url)
}
