const path = require('path')

console.log(process.env.HOME)

console.log(path.resolve('file.txt')) // expands to the path to current directory followed by file.txt
console.log(path.resolve(process.env.HOME,'file.txt')) // /home/sourab/file.txt

const parsedPath = path.parse('/home/sourab/file.txt') // creates an object out of path
const formatPath = path.format(parsedPath)  // opposite of path.parse

let new_path=path.join(__dirname,'/public') // path to current directory in which the file is present followed by public
console.log(new_path)

