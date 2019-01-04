const express = require('express');
const crypto = require('crypto-js');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

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
    RIPEMD160
  });
});

// app.get('/api/hash/:string/:secret', (req, res) => {
//   var string = req.params.string;
//   var secret = req.params.secret;
//   var PBKDF2 = crypto.PBKDF2(string, secret).toString();
//   var AES = crypto.AES.encrypt(string, secret).toString();
//   var tripledes = crypto.TripleDES.encrypt(string, secret).toString();
//   var rc4 = crypto.RC4.encrypt(string, secret).toString();
//   var rabbit = crypto.Rabbit.encrypt(string, secret).toString();
//     res.status(200).json({
//       string,
//       PBKDF2,
//       AES,
//       tripledes,
//       rc4,
//       rabbit
//     });
// });

app.post('/api/aes', (req, res) => {
  var string = req.body.string;
  var secret = req.body.secret;
  var hashed = crypto.AES.encrypt(string, secret).toString();
  res.json({hashed});
});

app.post('/api/')

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})