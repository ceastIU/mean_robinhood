var schedule = require('node-schedule');
var Robin = require("./robin");
 
var j = schedule.scheduleJob('5-15 * * * * *', function(){
  Robin.get('TSLA').then((data)=>{
    console.log(data);
  });
});