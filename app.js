var express = require('express');
var hbs = require('hbs');
var axios = require('axios');

var app = express();

var robin = require('./robin');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/stock:id', (req, res) =>{
    stockId = req.params.id;
    console.log(stockId);
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

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});