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

    if(req.method === "GET" && req.url === '/users'){
        return res.end(JSON.stringify(users))
    }

    // GET /users/:id
    if(req.method === "GET" && urlParts[0] === "users" && urlParts[1]){
        const user = users.find(u=> u.id === parseInt(urlParts[1]))
    }

    // POST /users
    if(req.method === "POST" && req.url === "/users"){
        try{
            const body = await getRequestBody(req);
            const newUser = { id: Date.now(), ...body };
            users.push(newUser);
            res.statusCode=201;
            res.end(JSON.stringify(newUser));
        }catch(err){
            res.statusCode = 400;
            return res.end(JSON.stringify(newUser))
        }
    }
    

// PUT /users/:id
  if (req.method === "PUT" && urlParts[0] === "users" && urlParts[1]) {
    try {
      const body = await getRequestBody(req);
      const idx = users.findIndex(u => u.id === parseInt(urlParts[1]));
      if (idx === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "User not found" }));
      }
      users[idx] = { ...users[idx], ...body };
      return res.end(JSON.stringify(users[idx]));
    } catch (err) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ message: "Invalid JSON" }));
    }
  }

// DELETE /users/:id
  if (req.method === "DELETE" && urlParts[0] === "users" && urlParts[1]) {
    const idx = users.findIndex(u => u.id === parseInt(urlParts[1]));
    if (idx === -1) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ message: "User not found" }));
    }
    const deleted = users.splice(idx, 1);
    return res.end(JSON.stringify(deleted[0]));
  }
 // Fallback
  res.statusCode = 404;
  res.end(JSON.stringify({ message: "Route not found" }));

})

server.listen(3000,()=>console.log("server running on http://localhost:3000"))

