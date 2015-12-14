/**
*	Encriptation test
*
*	@author Alan Olivares
*/

var assert	= require('assert');
var Encriptation = require('../');
var word = 'hola mundo!';

encriptation = new Encriptation();

// Simple test
wordEncript = encriptation.encrypt(word);

assert.notEqual(word, wordEncript);

assert.equal(wordEncript, encriptation.encrypt(word));

assert.equal(word, encriptation.decrypt(wordEncript));

console.log('Success test!', wordEncript, word);

// Custom test

config = {
	algorithm : 'camellia-256-ofb',
	key : '[Secret key]'
};

wordEncript = encriptation.encrypt(config, word);

assert.notEqual(word, wordEncript);

assert.equal(wordEncript, encriptation.encrypt(config, word));

assert.equal(word, encriptation.decrypt(config, wordEncript));

console.log('Success test!', wordEncript, word);
