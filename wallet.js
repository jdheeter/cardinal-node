let lotion = require('lotion')
let coins = require('coins')
var axios = require('axios')

// let APP_GCI = "f326a80c6716f9f8b146d73d0a46ebb1c883201bc105cfd28a8d8762dca3e7c9"

async function init(){
  var APP_GCI = (await axios.get('http://localhost:3000/info')).data.GCI
  // console.log(APP_GCI)
  if (!APP_GCI) return console.log('GCI not available')
  let client = await lotion.connect(APP_GCI)
  let wallet = coins.wallet(client)

  let address = wallet.address()
  console.log(address)

  let balance = await wallet.balance()
  console.log(balance)

  let result = await wallet.send('acct', 5)
  console.log(result)
}

 init().catch(console.log)

