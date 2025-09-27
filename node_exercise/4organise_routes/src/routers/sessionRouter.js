const express=require('express')
const sessionRouter =express.Router()

const sessions=require('../data/sessions.json')
sessionRouter.route('/')
.get((req,res)=>{
    // res.send('hello sessions')
    res.render('sessions',{
        sessions
    })
})
sessionRouter.route('/:id')  //this tells you do a request for /sessions/<something>
//that something item will be passed to this route and you can access it
.get((req,res)=>{
    const id=req.params.id;
    // res.send('hello single session ',id) this will not work if you pass string as id
    // res.send('hello single session '+id)//this will work in both number and id
    res.render('session',{
        session:sessions[id],
    })//this will work in both number and id
})

module.exports = sessionRouter
