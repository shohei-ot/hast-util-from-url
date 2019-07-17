# hast-util-from-url

[![npm version](https://badge.fury.io/js/hast-util-from-url.svg)](https://badge.fury.io/js/hast-util-from-url)
[![CircleCI](https://circleci.com/gh/shohei-ot/hast-util-from-url/tree/master.svg?style=svg)](https://circleci.com/gh/shohei-ot/hast-util-from-url/tree/master)

## Usage

### CLI

```sh
hast-util-from-url http://path/to/html

// or

npx hast-util-from-url http://path/to/html
```

### Node.js

```js
const fromUrl = require('hast-util-from-url')

;(async () => {
    const hast = await fromUrl('http://path/to/html')
    console.log(JSON.stringify(hast))
})()
```
