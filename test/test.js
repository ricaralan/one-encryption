/**
*	Encriptation test
*	@author Alan Olivares
*/

var assert	= require("assert"),
	Encriptation = require("../");

encriptation = new Encriptation();
word = "hola mundo!";
wordEncript = encriptation.cipher(word);

assert.notEqual(word, wordEncript);

assert.equal(wordEncript, encriptation.cipher(word));

assert.equal(word, encriptation.decipher(wordEncript));


console.log("Success test!", wordEncript);
