const express = require('express');
const crypto = require('crypto-js');
const bcrypt = require('bcrypt');

var app = express();

var port = process.env.PORT || 4000;

app.get('/api/hash/:string', (req, res) => {
  var string = req.params.string;
  var SHA1 = crypto.SHA1(string).toString();
  var SHA3 = crypto.SHA3(string).toString();
  var SHA224 = crypto.SHA224(string).toString();
  var SHA256 = crypto.SHA256(string).toString();
  var SHA384 = crypto.SHA384(string).toString();
  var SHA512 = crypto.SHA512(string).toString();
  var MD5 = crypto.MD5(string).toString();
  var RIPEMD160 = crypto.RIPEMD160(string).toString();
  res.status(200).json({
    string,
    SHA1,
    SHA3,
    SHA224,
    SHA256,
    SHA384,
    SHA512,
    MD5,
    RIPEMD160,
    PBKDF2
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})