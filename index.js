/**
*	This module help to cipher and decipher
*
*	@version 2.4.1
*	@author Alan Olivares
*/

module.exports = function() {

	var crypto = require("crypto"),
		configEncriptation  = require("./ConfigEncriptation");

	this.encrypt = function(params, word) {
		initConfig(params, word);
		try {
			var cipher			 = crypto.createCipher(
				configEncriptation.openSSLCipherAlgorithm,
				configEncriptation.key);
			var wordCipher   = cipher.update(configEncriptation.word, "utf8", "hex");
			wordCipher 	    += cipher.final("hex");
		} catch(e) {
			console.log("ERROR CIPHER: " + e.message, configEncriptation.word);
		}
		return wordCipher;
	};

	this.decrypt = function(params, wordToDecipher) {
		initConfig(params, wordToDecipher);
		try {
			var decipher     = crypto.createDecipher(
				configEncriptation.openSSLCipherAlgorithm,
				configEncriptation.key);
			var wordDecipher = decipher.update(configEncriptation.word, "hex", "utf8");
			wordDecipher	+= decipher.final("utf8");
		} catch(e) {
			console.log("ERROR DECIPHER: " + e.message, configEncriptation.word);
		}
		return wordDecipher;
	};

	function initConfig(params, word) {
		if(params && params instanceof Object) {
			setConfig(params);
			configEncriptation.word = word;
		} else {
			configEncriptation.word = params;
		}
	}

	function setConfig(params) {
		setDataIfExist("openSSLCipherAlgorithm", params, "algorithm");
		setDataIfExist("key", params, "key");
	}

	function setDataIfExist(posConfig, json, posJson) {
		configEncriptation[posConfig] = (json instanceof Object && json[posJson] != undefined) ? json[posJson] : configEncriptation[posConfig];
	}

}
