/**
*	This module help to cipher and decipher
*
*	@version 2.7.1
*	@author Alan Olivares
*/

'use strict'

var crypto = require('crypto');
var OneEncryption = function() {
  this.config = require('./ConfigEncriptation');
};

/**
*	encrypt() returns a word ciphered
*
*	@param  {JSON | String} params
*	@param  {String} word
*	@return {String} ciphered word
*/
OneEncryption.prototype.encrypt = function(params, word) {
  this._initConfig(params, word);
  try {
    var cipher			 = crypto.createCipher(
      this.config.openSSLCipherAlgorithm,
      this.config.key);
    var wordCipher   = cipher.update(this.config.word, 'utf8', 'hex');
    wordCipher 	    += cipher.final('hex');
  } catch(e) {
    console.log('ERROR CIPHER: ' + e.message, this.config.word);
  }

  return wordCipher;
}

/**
*	decrypt() takes a word ciphered and decipher the word
*
*	@param  {JSON | String} params
*	@param  {String} wordToDecipher
*	@return {String} deciphered word
*/
OneEncryption.prototype.decrypt = function(params, wordToDecipher) {
  this._initConfig(params, wordToDecipher);
  try {
    var decipher     = crypto.createDecipher(
      this.config.openSSLCipherAlgorithm,
      this.config.key);
    var wordDecipher = decipher.update(this.config.word, 'hex', 'utf8');
    wordDecipher	+= decipher.final('utf8');
  } catch(e) {
    console.log('ERROR DECIPHER: ' + e.message, this.config.word);
  }

  return wordDecipher;
}

OneEncryption.prototype._initConfig = function(params, word) {
  if(params && params instanceof Object) {
    this._setConfig(params);
    this.config.word = word;
  } else {
    this.config.word = params;
  }
}

OneEncryption.prototype._setConfig = function(params) {
  this._setDataIfExist('openSSLCipherAlgorithm', params, 'algorithm');
  this._setDataIfExist('key', params, 'key');
}

OneEncryption.prototype._setDataIfExist = function(posConfig, json, posJson) {
  this.config[posConfig] = (json instanceof Object && json[posJson] != undefined) ? json[posJson] : this.config[posConfig];
}

module.exports = OneEncryption;
