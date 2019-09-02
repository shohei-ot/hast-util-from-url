import express from 'express'
import getResponseBody from '../get-response-body'

describe('get response body ', () => {
  it('is valid', async done => {
    const html = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>test</title>
      </head>
      <body>
        <div id="app">app</div>
      </body>
    </html>`
    const port = 8089
    const path = '/'
    const host = 'localhost'

    const app = express()
    app.get(path, (req, res) => {
      res.setHeader('Content-Type', 'text/html')
      res.send(html)
    })
    const server = app.listen(port)

    const resp = await getResponseBody('/', {
      method: 'get',
      proxy: { port, host }
    })
    server.close()
    expect(resp).toEqual(html)
    done()
  })
})
