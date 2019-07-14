#!/usr/bin/env node

const exit = require('exit')
const HastUtilFromUrl = require('../dist/index.js')

;(async () => {
  try {
    const url = process.argv[2]
    if (!url)
      throw new Error(
        'Please set URL for argument (example: "hast-util-from-url http://path/to/html")'
      )
    const hast = await HastUtilFromUrl(url)
    console.log(JSON.stringify(hast))
  } catch (e) {
    console.log(e.message)
    exit(1)
  }
})()
