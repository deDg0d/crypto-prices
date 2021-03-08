const axios = require('axios')
const cheerio = require('cheerio')
var crypto = []
var names  = []
var merge  = []
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
   crypto[i]= [price]
})
var name = $('p.coin-item-symbol').each((i,e)=>{
name= $(e).text()
names[i]= [name]

})
for(i=0;i<=names.length;i++){   
  merge[names[i]]=[crypto[i]]
}
//console.log('bitcoin :' + crypto[0]+'\n'+ 'ethereum :' + crypto[1])

console.log(merge)
})