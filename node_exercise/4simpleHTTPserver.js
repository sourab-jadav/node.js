const http = require('http')


let users =[
    { id: 1, name: "Alice", email: "alice@test.com" },
    { id: 2, name: "Bob", email: "bob@test.com" }
]

function getRequestBody(req){
    return new Promise((resolve,reject)=>{
        let body = "";
        req.on("data",chunk=>{
            body += chunk.toString();
        })
        req.on("end",()=>{
            try{
                resolve(body ? JSON.parse(body) : {});
            }catch(err){
                reject(err)
            }
        })
    })
}


const server = http.createServer(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    // res.writeHead(200,{'Content-Type':'text/plain'})
    // res.setHeader("Content-Type", "application/json");
    const urlParts=req.url.split("/").filter(Boolean);
    res.end('hello world')
})

server.listen(3000,()=>console.log("server running on http://localhost:3000"))

