//Assert Module
// The assert Module checks for errors in the assertion and terminates the program once an expression is false.


var assert = require('assert');
assert.strictEqual(52, parseInt("52"));  //this would not return an error because the argument is  correct
assert.strictEqual(25, "25"); //this would assert an error because one is an integer and the other is a string
