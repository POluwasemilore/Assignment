var crypto = require('crypto');

var mykey = createCipheriv('gjcffjhc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex')
mystr += mykey.final('hex');

console.log(mystr); //34feb914c099df25794bf9ccb85bea72
