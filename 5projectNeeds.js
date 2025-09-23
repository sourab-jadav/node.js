

// for getting debug information we use morgan
// const express=require('express')
// const app=express()
// const morgan=require('morgan')

// app.use(morgan('combined'))  //this gives a lot of information
// app.use(morgan('tiny'))  //this gives a tiny of information


// app.get('/',(req,res)=>{
//     res.send('welcome to express')
// })

// app.listen(300,()=>{
//     console.log('servering running on port 300');
// })


// serving the static content
 // * serving the html 
 // * usage:- app.use(express.static(path.join(__dirname,'/public/')))
 // * 
 // * the above line of code tells start searching from the location from the directory where the file
 // * is started running from there look into a folder called public and if came across any file with name
 // * index.html 
 // * then serve that file as response from the server
 // * 
 // * NOTE:- if the filename is index1.html then it will not serve 

