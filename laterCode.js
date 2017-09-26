//code to sell WDC
// var sell = (test)=> {
//     console.log(test);
//     Robinhood(credentials, function(){
    
//     var options = {
//         type: 'limit',
//         quantity: 1,
//         bid_price: 200.00,
//         instrument: {
//             url: "https://api.robinhood.com/instruments/81aace36-131a-4fed-98a5-cfe9fc29814e/",
//             symbol: "WDC"
//         },
//         // // Optional:
//         // trigger: String, // Defaults to "gfd" (Good For Day)
//         // time: String,    // Defaults to "immediate"
//         // type: String     // Defaults to "market"
//     }
//     Robinhood.place_sell_order(options, function(error, response, body){
//         if(error){
//             console.error(error);
//         }else{
//             console.log(body);
//         }
//     });
// });
// }