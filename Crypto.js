//Crypto module
//Crypto module helps to encrypt, this one uses hash.

const crypto = require('crypto');

const message = 'Secret Message';
const hash = crypto.createHash('sha256').update(message).digest('hex');

console.log(hash);

