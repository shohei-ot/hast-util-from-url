import { fromStringNode, fromStringBrowser } from '../get-document-from-string'

describe('get document from string', () => {
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

  it('is valid (node)', () => {
    const doc = fromStringNode(html)
    expect(doc.nodeType).toBeDefined()
  })

  it('is valid (browser)', () => {
    const doc = fromStringBrowser(html)
    expect(doc.nodeType).toBeDefined()
  })
})
