var storage = require('node-persist');

storage.init(
    {logging: true,
    ttl: 3001})
    .then(function() {
    //then start using it 
        //storage.setItem('stocks','Chris');
        storage.setItem('counter', 1)
    .then(function() {
   
      return storage.getItem('counter')
    })
    .then(function(value) {
   
      console.log(value); // yourname 
    })
  });
console.log(storage.getItem('counter'));
l = storage.getItem('counter');
storage.setItem('counter',l + 1);
console.log(storage.getItem('counter'));