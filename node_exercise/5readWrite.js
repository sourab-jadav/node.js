const fs = require('fs')


fs.writeFileSync('example.txt','hello world is written');
const data = fs.readFileSync('example.txt','utf-8')

console.log(data)

