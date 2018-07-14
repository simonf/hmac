const crypto = require('crypto-js')
const Base64 = crypto.enc.Base64

var key = 'simonrocks'
var message = 'abcdefghijklmnopqrstuvwxyz'

var digest = crypto.HmacSHA256(message, key)
var auth_header = Base64.stringify(digest)
//var auth_header = Buffer.from(digest.toString()).toString('base64')
console.log(auth_header)


