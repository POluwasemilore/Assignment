//Buffer Module
// The buffer module refers to specific memory allocated to perform binary operations.

var buf = Buffer.alloc(4);
console.log(buf.length);

var buf2 = Buffer.from('H');
console.log(buf2.length);