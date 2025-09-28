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



// const express=require('express')
// const debug=require('debug')('app:sessionRouter')
// const {MongoClient, ObjectId} = require('mongodb')
// const sessions=require('../data/sessions.json')



// const sessionRouter =express.Router()


// sessionRouter.route('/').get((req,res)=>{
//     const url = 'mongodb+srv://sourabhjadav7:n8VLVoPro48b15IX@globalmantics.uk0xb1e.mongodb.net?retryWrites=true&w=majority&appName=globalmantics';
//     const dbName = 'globalmantics';

//     (async function mongo() {
//         let client;
//         try {
//             client = await MongoClient.connect(url);
//             debug('Connected to MongoDB');

//             const db = client.db(dbName);
//             const sessions = await db.collection('sessions').find().toArray();
//             res.render('sessions',{sessions});
//         } catch (error) {
//             console.error(error.stack);
//             res.status(500).json({ error: 'Internal server error' });
//         } finally {
//             if (client) client.close(); }
//     })();
// })

// module.exports=sessionRouter

/**
 * settingup a single session route
 */
// const express=require('express')
// const debug=require('debug')('app:sessionRouter')
// const {MongoClient, ObjectId} = require('mongodb')
// const sessions=require('../data/sessions.json')

// sessionsRouter=express.Router()

// sessionsRouter.use((req,res,next)=>{
//     if(req.user){
//         next();
//     }else{
//         res.redirect('/auth/signin/')
//     }
// })



// sessionsRouter.route('/:id').get((req,res)=>{
//     const url = 'mongodb+srv://sourabhjadav7:n8VLVoPro48b15IX@globalmantics.uk0xb1e.mongodb.net?retryWrites=true&w=majority&appName=globalmantics';
//     const dbName = 'globalmantics';
//     const id= req.params.id;


//     (async function mongo() {
//         let client;
//         try {
//             client = await MongoClient.connect(url);
//             debug('Connected to MongoDB');

//             const db = client.db(dbName);
//             const session = await db.collection('sessions').findOne({_id:new ObjectId(id)})
//             res.render('session',{
//               session
//             })
//         } catch (error) {
//             console.error(error.stack);
//             res.status(500).json({ error: 'Internal server error' });
//         } finally {
//             if (client) client.close(); }
//     })();
// })

// module.exports=sessionsRouter


/**
 * adding middleware to block sessions and to display only when the user is logged i
 */

// const express=require('express')
// const debug=require('debug')('app:sessionRouter')
// const {MongoClient, ObjectId} = require('mongodb')
// const sessions=require('../data/sessions.json')

// sessionsRouter=express.Router()

// sessionsRouter.use((req,res,next)=>{
//     if(req.user){
//         next();
//     }else{
//         res.redirect('/auth/signin/')
//     }
// })



// sessionsRouter.route('/:id').get((req,res)=>{
//     const url = 'mongodb+srv://sourabhjadav7:n8VLVoPro48b15IX@globalmantics.uk0xb1e.mongodb.net?retryWrites=true&w=majority&appName=globalmantics';
//     const dbName = 'globalmantics';
//     const id= req.params.id;


//     (async function mongo() {
//         let client;
//         try {
//             client = await MongoClient.connect(url);
//             debug('Connected to MongoDB');

//             const db = client.db(dbName);
//             const session = await db.collection('sessions').findOne({_id:new ObjectId(id)})
//             res.render('session',{
//               session
//             })
//         } catch (error) {
//             console.error(error.stack);
//             res.status(500).json({ error: 'Internal server error' });
//         } finally {
//             if (client) client.close(); }
//     })();
// })

// module.exports=sessionsRouter



