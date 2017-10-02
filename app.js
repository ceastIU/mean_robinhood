var express = require('express');
var hbs = require('hbs');
var axios = require('axios');
var discord = require('./discord');
var stocks = require('./stocks');
var app = express();
const PORT = process.env.PORT || 3001;

var robin = require('./robin');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('times', function(stock, block) {
    var accum = '';
    for(var i = 0; i < stock.length; ++i){
        console.log("stock hbs",stock[i]);
        accum += block.fn(stock[i].id);
    }
    return accum;
});

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('index.hbs',{
        owner: "Christopher East",
        default: "TSLA",
        stocks: stocks.getStocks()
    });
});

discord.run();

app.get('/stock:id', (req, res) =>{
    stockId = req.params.id;
    console.log(stockId);
    robin.sub(stockId);
    robin.get(req.params.id).then((data)=>{
        res.render('stock.hbs',{
            stock: stockId,
            price: '$' + data
        });
    }).catch((data) => {
        console.log(data);
        res.render('stock.hbs',{
            stock: stockId,
            price: data
        });
    });
     
});

app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
});