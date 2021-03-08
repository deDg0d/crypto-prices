const axios = require('axios')
const cheerio = require('cheerio')
const http = require('http')
var crypto = []
//axios.get('https://www.coindesk.com/price/bitcoin')
//.then(res=>{
   // $ = cheerio.load(res.data)
   // const bitcoin = $('div.price-large').text()
//console.log(bitcoin)
//})
axios.get('https://coinmarketcap.com/')
.then(res=>{
    
    $ = cheerio.load(res.data)
    
   var price  = $('div.price___3rj7O ').each((i,e)=>{
   price = $(e).text()
   crypto[i]= {price}
})

console.log('bitcoin :' + crypto[0]+'\n'+ 'ethereum :' + crypto[1])
})