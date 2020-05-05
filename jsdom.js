const request = require('request')
const {
  JSDOM
} = require('jsdom')

request('http://www.uec.ac.jp/', (e, response, body) => {
  if (e) {
    console.error(e)
  }

  try {
    const dom = new JSDOM(body)
    console.log(`${dom.toString()}`)
  } catch (e) {
    console.error(e)
  }
})