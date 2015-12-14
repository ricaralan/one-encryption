/**
*	This module help to cipher and decipher
*
*	@version 2.7.1
*	@author Alan Olivares
*/

'use strict'

var crypto = require('crypto');
var OneEncryption = function() {
  this._config = require('./ConfigEncriptation');
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
      this._config.openSSLCipherAlgorithm,
      this._config.key);
    var wordCipher   = cipher.update(this._config.word, 'utf8', 'hex');
    wordCipher 	    += cipher.final('hex');
  } catch(e) {
    console.log('ERROR CIPHER: ' + e.message, this._config.word);
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
      this._config.openSSLCipherAlgorithm,
      this._config.key);
    var wordDecipher = decipher.update(this._config.word, 'hex', 'utf8');
    wordDecipher	+= decipher.final('utf8');
  } catch(e) {
    console.log('ERROR DECIPHER: ' + e.message, this._config.word);
  }

  return wordDecipher;
}

OneEncryption.prototype._initConfig = function(params, word) {
  if(params && params instanceof Object) {
    this._setConfig(params);
    this._config.word = word;
  } else {
    this._config.word = params;
  }
}

OneEncryption.prototype._setConfig = function(params) {
  this._setDataIfExist('openSSLCipherAlgorithm', params, 'algorithm');
  this._setDataIfExist('key', params, 'key');
}

OneEncryption.prototype._setDataIfExist = function(posConfig, json, posJson) {
  this._config[posConfig] = (json instanceof Object && json[posJson] != undefined) ? json[posJson] : this._config[posConfig];
}

module.exports = OneEncryption;
