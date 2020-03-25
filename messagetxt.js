var fs = require('fs');

fs.writeFile('message.txt', 'Hello world', function (err) {
  if (err) throw err;
  console.log('Saved!');
});