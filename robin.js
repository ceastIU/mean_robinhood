//The username and password you use to sign into the robinhood app.
var credentials = {
    username: 'ceast',
    password: 'Perch-0506'
};

var request = require('request');

var Robinhood = require('robinhood')(credentials, function(){
    
       //Robinhood is connected and you may begin sending commands to the api.
    
});

var RobinObserver = require('robinhood-observer');     //Robinhood has not authenticated but can still be used for the unauthenticated subset of the API 
var sub = (syb) => {
    observer = RobinObserver(null).observeQuote([syb])   //Do not authenticate 
    
    var buySubscription = observer
                        .map(quote => quote.results)                            
                        .distinct()                   //Only use distict results... 
                        .subscribe(x => {
                            //This block of code is executed only when the price has changed. 
                            console.log(x[0].last_trade_price);
    
                        }, e => {
                            console.error(e)
                        }, () => console.log('buy subscription disposed'));
    
    //Unsubscribe to updates after 5 seconds. 
    
    //setTimeout(function(){
    //    subscription.dispose();  
    //}, 5000);
    
};

var get = (test) => {
    return new Promise((resolve, reject) =>{ 
        Robinhood.quote_data(test, function(error, response, body) {
            if (body != undefined) {
                resolve(body.results[0].ask_price);
                
            } else {
                reject("Stock not found!");
            }
            //console.log(response);
            
        });
    });
}



module.exports = {
    get,sub
}