/**
*	Encriptation test
*
*	@author Alan Olivares
*/

var assert	= require("assert"),
	Encriptation = require("../");

encriptation = new Encriptation();
word = "hola mundo!";
// Simple test
wordEncript = encriptation.encrypt(word);

assert.notEqual(word, wordEncript);

assert.equal(wordEncript, encriptation.encrypt(word));

assert.equal(word, encriptation.decrypt(wordEncript));

// Custom test

config = {
	algorithm : "aes-128-cbc",
	key : "[Secret key]"
};

wordEncript = encriptation.encrypt(config, word);

assert.notEqual(word, wordEncript);

assert.equal(wordEncript, encriptation.encrypt(config, word));

assert.equal(word, encriptation.decrypt(config, wordEncript));

console.log("Success test!", wordEncript, word);
