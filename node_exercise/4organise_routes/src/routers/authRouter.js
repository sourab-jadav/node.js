// this router is for handling the signup 
// getting the data from the body return it as json

const express=require('express')
const debug=require('debug')('app:sessionRouter')
const {MongoClient, ObjectId} = require('mongodb')
const bodyparser=require('body-parser')

const jsonparser=bodyparser.json()
const urlencodedparser=bodyparser.urlencoded({extended:false})


const authRouter = express.Router()
//this router is going to be placed at /auth/<and outher>

authRouter.route('/submit').post(urlencodedparser,function(req,res){
    res.json(req.body)
})
module.exports =authRouter
