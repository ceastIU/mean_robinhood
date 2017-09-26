/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');
const Robin = require('./robin');
const Twilo = require('./twilio');
const Stocks = require('./stocks'); 
// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzM3MjQ3NzIzOTY1MzgyNjU3.DKiIhA.1UQ6LNnWP8KauJTSu2covvttIDU';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});
// Template 

// $CYCC Buy at the break of $2.05 and sell at $2.15-$2.25
// $TEUM Buy at the break of $1.15 and sell at $1.21-$1.25
// $CUR Buy at the break of $1.75 and sell at $1.83-$1.95 (LOSS)


// Create an event listener for messages
client.on('message', message => {
  // If the message starts with $
  if (message.content[0] === '$' && !message.author.bot) {
    msg = message.content;
    parts = msg.split(" ");
    Robin.get(parts[0].slice(1)).then((data)=>{
        re = parts[0] + " buy at "+ parts[6]+ " current: $" + data +" broken: "+(parts[6]<data);
        var now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        //var jsonDate = now.toJSON();
        console.log("Date: ", now);
        object = {id: parts[0], buy: parts[6], sell: parts[10], date: now};
        console.log("object",object);
        Stocks.addStock(object);
        console.log(Stocks.getStocks());
        message.channel.send(re);
        Twilo.send(re);
    }).catch((data) =>{
        message.channel.send(msg);
    }); 
  } else if(!message.author.bot) {
        Robin.get(message.content).then((data)=>{
            message.channel.send("$"+data);
        }).catch((msg)=>{
            message.channel.send(msg);
        });
    }
});

// Log our bot in
client.login(token);