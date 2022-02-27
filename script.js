
var btc = document.getElementById("coin-price__bitcoin");
var eth = document.getElementById("coin-price__ethereum");
var sol = document.getElementById("coin-price__solana");

var setting = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd",
    "method": "GET",
    "headers": {    }
}
 $.ajax(setting).done(function(response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    sol.innerHTML = response.solana.usd;
 });