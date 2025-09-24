const http = require('http')

const server = http.createServer(async (req,res)=>{
    // res.writeHead(200,{'Content-Type':'application/json'})
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.setHeader("Content-Type", "application/json");
    const urlParts=req.url.split("/").filter(Boolean);
    res.end('hello world')
})

server.listen(3000,()=>console.log("server running on http://localhost:3000"))

