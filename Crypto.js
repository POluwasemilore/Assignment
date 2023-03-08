var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'bin')
mystr += mykey.final('bin');

console.log(mystr); 
