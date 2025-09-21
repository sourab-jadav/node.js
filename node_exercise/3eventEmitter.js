const http= require('http')

// const server = http.createServer((req,res)=>{
//     req.writeHead(200,{'Content-Type':'applciation/json'})
//     res.end(JSON.stringify({
//         data:'hello world',
//     }))
// })

const server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHead();
    res.end()
})

server.listen(8000,()=>{
    console.log('server listening on port 8000 ')
})
