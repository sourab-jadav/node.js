const fs = require('fs')

const readStream = fs.createReadStream('bigFile.txt','utf-8')

readStream.on('data',chunk=>console.log(chunk))
