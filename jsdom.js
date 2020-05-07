const request = require('request')
const {
  JSDOM
} = require('jsdom')

request('http://www.uec.ac.jp/', (a, response, body) => {
  if (a) {
    console.error(a)
}

try {
    const dom = new JSDOM(body)
    console.log(`${dom.toString()}`)
  } catch (a) {
    console.error(a)
  }
})