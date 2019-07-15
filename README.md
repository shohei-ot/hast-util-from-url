# hast-util-from-url

## Install

```sh
npm install hast-util-from-url
```

## Usage

### CLI

```sh
hast-util-from-url http://path/to/html
```

### Node.js

```js
const fromUrl = require('hast-util-from-url')

;(async () => {
    const jsonObj = await fromUrl('http://path/to/html')
    console.log(JSON.stringify(jsonObj))
})()
```
