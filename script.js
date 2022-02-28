
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

//  Trending

var logo1 = document.getElementById("logo-1");
var sym1 = document.getElementById("symbols-1");
var name1 = document.getElementById("name-1");
var rank1 = document.getElementById("rank-1");
var price1 = document.getElementById("price-1");

var logo2 = document.getElementById("logo-2");
var sym2 = document.getElementById("symbols-2");
var name2 = document.getElementById("name-2");
var rank2 = document.getElementById("rank-2");
var price2 = document.getElementById("price-2");

var logo3 = document.getElementById("logo-3");
var sym3 = document.getElementById("symbols-3");
var name3 = document.getElementById("name-3");
var rank3 = document.getElementById("rank-3");
var price3 = document.getElementById("price-3");


var setting1 = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/search/trending",
    "method": "GET",
    "headers": {    }
}
$.ajax(setting1).done(function(response) {
    var coin1 = response.coins.filter(items => {
        if(items.item.score == 0) {
            console.log(items);
            return items;
        }
    });
    var coin2 = response.coins.filter(items => {
        if(items.item.score == 1) {
            console.log(items);
            return items;
        }
    });
    var coin3 = response.coins.filter(items => {
        if(items.item.score == 2) {
            console.log(items);
            return items;
        }
    });
    

    logo1.src = coin1[0].item.large;
    sym1.innerHTML = coin1[0].item.symbol;
    name1.innerHTML = coin1[0].item.name;
    rank1.innerHTML = coin1[0].item.market_cap_rank;
    price1.innerHTML = coin1[0].item.price_btc;

    logo2.src = coin2[0].item.large;
    sym2.innerHTML = coin2[0].item.symbol;
    name2.innerHTML = coin2[0].item.name;
    rank2.innerHTML = coin2[0].item.market_cap_rank;
    price2.innerHTML = coin2[0].item.price_btc;

    logo3.src = coin3[0].item.large;
    sym3.innerHTML = coin3[0].item.symbol;
    name3.innerHTML = coin3[0].item.name;
    rank3.innerHTML = coin3[0].item.market_cap_rank;
    price3.innerHTML = coin3[0].item.price_btc;
});
