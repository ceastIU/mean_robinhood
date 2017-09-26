var twilio = require('twilio');

var accountSid = 'AC51b7a3019e1da9d6ae689e1b1f2e65b9'; // Your Account SID from www.twilio.com/console
var authToken = '09442b3c003f372f0e4dd61c1abbde40';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var send = (text) => {
    console.log("test", text);
    client.messages.create({
        body: text,
        to: '+13868728125',  // Text this number
        from: '+13862674312' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
};

module.exports = {
    send
}