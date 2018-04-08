let initialState = require('./initialState')
let app = require('lotion')({initialState,devMode:true})
let coins = require('coins')

let coinConfig = {
  name: 'EGG',
  initialBalances: {
    '3MwK9ynD9bWmUBcx5UUTFkD1Lhf1i9WeH':1000,
    '6hhjdbjmsbWmU3cx5UU4FkD1ghf1i3Wfb':5,
    'acct':0
  }
}
var OracleData = function(){

}

app.use(coins(coinConfig))

app.listen(3000).then((result)=>{
  console.log(result)
})