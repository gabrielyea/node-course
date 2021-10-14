#! /usr/bin/env node

import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

const { argv } = yargs(process.args)

const res = await fetch('https://reddit.com/.json')
const data = await res.json()
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * data.data.children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`

if (process.argv[2] === '--print') {
  console.log(`
    Title: ${randomPost.data.title}\n
    Link: ${link}
  `)
} else {
  // open in browser if not
  open(link)
}
