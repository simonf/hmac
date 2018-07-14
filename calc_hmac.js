const crypto = require('crypto-js')
const Base64 = crypto.enc.Base64

var key = process.argv[2]
var message = process.argv[3]

var digest = crypto.HmacSHA256(message, key)
var auth_header = Base64.stringify(digest)
//var auth_header = Buffer.from(digest.toString()).toString('base64')
console.log(auth_header)


