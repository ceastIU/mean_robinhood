//The username and password you use to sign into the robinhood app.
var credentials = {
    username: 'ceast',
    password: 'Perch-0506'
};

var request = require('request');

var Robinhood = require('robinhood')(credentials, function(){
    
       //Robinhood is connected and you may begin sending commands to the api.
    
       
    
   });

var get = (test) => {
    return new Promise((resolve, reject) =>{ 
        console.log('t',test);
        Robinhood.quote_data(test, function(error, response, body) {
            //console.log('test:', test);
            console.log(body === undefined);
            if (body != undefined) {
                resolve(body.results[0].ask_price);
                
            } else {
                console.log('in!');
                reject("Stock not found!");
            }
            //console.log(response);
            
        });
    });
}

module.exports = {
    get
}