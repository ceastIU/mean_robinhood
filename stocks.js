var stocksJ = {
    stocks: [
        {"id": "Tsla", "buy": 300, "sell": 350, "date": "2017-09-30 15:35:14"},
    ]
}

function updateStocks(object) {
    stocks = stocksJ.stocks;
    flag = false;
    for (var z = 0; z < stocks.length; z++) {
        if(stocks[z].id==object.id){ //&& stocks[z].month==newRecord.month){
            stocks[z] = newRecord;
            flag = flag || true;
        } else { 
            flag = flag || false;
        }
    }
    if (!flag){
        stocks.push(object)
    }
    return stocks;
}

var getStocks =() => {
    console.log("accessed");
    return stocksJ.stocks;
}
var getStock = (id) => {
    return stocksJ.stocks[1];
}
var now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
//var jsonDate = now.toJSON();
// console.log("Date: ", now);
// object = {id: 'Tsla', buy: 300, sell: 350, date: "2017-09-30 15:35:14"};
// jsonStock = JSON.stringify(object);
// updateStocks(jsonStock);
// //console.log(getStock('Tsla'));
// console.log(getStocks());

module.exports = {
    getStocks, updateStocks
}