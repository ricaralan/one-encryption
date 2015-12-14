# One encrypt

![license](http://img.shields.io/npm/l/one-encryption.svg?style=flat)
![version](http://img.shields.io/npm/v/one-encryption.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/one-encryption.svg?style=flat)

This module help cipher and decipher with openssl system and crypto module

```shell
  npm install --save one-encryption
```
Usage - step 1 "instantiation"

```shell

  var Encryption = require('one-encryption'),
      oneEncrypt = new Encryption();

    or

  var oneEncrypt = new (require('one-encryption'))();

```

Usage - step 2 "Simple usage"

```shell

  cipheredWord = oneEncrypt.encrypt('Mi top secret!!');

  decipheredWord = oneEncrypt.decrypt(cipheredWord);

```

Usage - step 3 "Custom usage" <br/>
You can customize the algorithm and encryption key <br/>
  <p>Algorithm: you can use any algorithm of crypto module... </p>
  <p>
  CAST-cbc, aes-128-cbc, aes-128-cbc-hmac-sha1, aes-128-cfb, aes-128-cfb1, aes-128-cfb8, aes-128-ctr, aes-128-ecb, aes-128-gcm, aes-128-ofb, aes-128-xts, aes-192-cbc, aes-192-cfb, aes-192-cfb1, aes-192-cfb8, aes-192-ctr, aes-192-ecb, aes-192-gcm, aes-192-ofb, aes-256-cbc, aes-256-cbc-hmac-sha1, aes-256-cfb, aes-256-cfb1, aes-256-cfb8, aes-256-ctr, aes-256-ecb, aes-256-gcm, aes-256-ofb, aes-256-xts, aes128, aes192, aes256, bf, bf-cbc, bf-cfb, bf-ecb, bf-ofb, blowfish, camellia-128-cbc, camellia-128-cfb, camellia-128-cfb1, camellia-128-cfb8, camellia-128-ecb, camellia-128-ofb, camellia-192-cbc, camellia-192-cfb, camellia-192-cfb1, camellia-192-cfb8, camellia-192-ecb, camellia-192-ofb, camellia-256-cbc, camellia-256-cfb, camellia-256-cfb1, camellia-256-cfb8, camellia-256-ecb, camellia-256-ofb, camellia128, camellia192, camellia256, cast, cast-cbc, cast5-cbc, cast5-cfb, cast5-ecb, cast5-ofb, des, des-cbc, des-cfb, des-cfb1, des-cfb8, des-ecb, des-ede, des-ede-cbc, des-ede-cfb, des-ede-ofb, des-ede3, des-ede3-cbc, des-ede3-cfb, des-ede3-cfb1, des-ede3-cfb8, des-ede3-ofb, des-ofb, des3, desx, desx-cbc, id-aes128-GCM, id-aes192-GCM, id-aes256-GCM, idea, idea-cbc, idea-cfb, idea-ecb, idea-ofb, rc2, rc2-40-cbc, rc2-64-cbc, rc2-cbc, rc2-cfb, rc2-ecb, rc2-ofb, rc4, rc4-40, rc4-hmac-md5, seed, seed-cbc, seed-cfb, seed-ecb, seed-ofb
  </p>

  <p>Encryption key: You can use any word or key for example 'masterkey'</p>

```shell

  config = {
    algorithm : 'algorithm',// It's not required (DEFAULT : 'aes-256-ecb')
    key : 'masterkey'// It's not required
  };

  cipheredWord = oneEncrypt.encrypt(config, 'Mi top secret!!');

  decipheredWord = oneEncrypt.decrypt(config, cipheredWord);

```
