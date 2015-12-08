# One encrypt

This module help cipher and decipher with openssl system and crypto module

```shell
  npm install --save one-encryption
```
Usage - step 1 "instantiation"

```shell

  var Encryption = require("one-encryption"),
      oneEncrypt = new Encryption();

    or

  var oneEncrypt = new (require("one-encryption"))();

```

Usage - step 2 "Simple usage"

```shell

  cipheredWord = oneEncrypt.encrypt("Mi top secret!!");

  decipheredWord = oneEncrypt.decrypt(cipheredWord);

```

Usage - step 3 "Custom usage"
You can customize the algorithm and encryption key
  Algorithm: You need have openssl installed in your SO and choose any available algorithm
  Encryption key: You can use any word or key for example "masterkey"

```shell

  config = {
    algorithm : "any  available ssl algorithm",// It's not required
    key : "masterkey"// It's not required
  };

  cipheredWord = oneEncrypt.encrypt(config, "Mi top secret!!");

  decipheredWord = oneEncrypt.decrypt(config, cipheredWord);

```
