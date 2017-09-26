var stocks = {
    stocks: [
        
    ]
}

var addStock = (object) => {
    if (stocks.stocks.find(object.id)){
        stocks.stocks.find(object.id) = object;
    } else {
        stocks.stocks.push(object);
    }
    console.log(stocks);
};

var getStocks =() => {
    return stocks
}

module.exports = {
    getStocks, addStock
}