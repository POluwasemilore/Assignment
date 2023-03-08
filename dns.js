//DNS Module
//with the dns module we can get the name resolution of website domain names. 

var dns = require('dns');
var go = dns.lookup('google.com', function (err, addresses, family) {
  console.log(addresses);
});