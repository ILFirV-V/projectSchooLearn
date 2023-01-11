import base64url from "base64url";


header = { "alg": "HS256", "typ": "JWT"}
// payload = { "userId": "b08f86af-35da-48f2-8fab-cef3904660bd" }
//
// const base64url = require('base64url');
//
// const SECRET_KEY = 'cAtwa1kkEy'
// const unsignedToken = base64url.encode(header) + '.' + base64url.encode(payload)
console.log(base64url.encode(2))
// const signature = HMAC-SHA256(unsignedToken, SECRET_KEY)
//
// const token = encodeBase64Url(header) + '.' + encodeBase64Url(payload) + '.' + encodeBase64Url(signature)
