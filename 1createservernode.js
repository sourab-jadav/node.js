const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('hello world\n');
});

server.listen(4242,()=>{
    console.log('server running at ',4242);
});

using setTimeout and clearTimeout

let timerId=setTimeout(()=>{
    console.log('timeout fired after 2 sec')
},2000)

clearTimeout(timerId)
