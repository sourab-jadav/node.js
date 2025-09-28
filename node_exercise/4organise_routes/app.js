const express=require('express')
const bodyparser=require('body-parser')
const app=express()
const path=require('path')
const morgan=require('morgan')


const passport=require('passport')
const cookieparser=require('cookie-parser')
const session=require('express-session')

const sessionRouter =require('./src/routers/sessionsRouter')
const adminRouter = require('./src/routers/AdminRouter')
const authRouter= require('./src/routers/authRouter')

const PORT = process.env.PORT || 3000

// // Middleware
// // Middleware {these all middleware needs to be flown in order }
app.use(morgan('tiny'))  //this gives a tiny of information
app.use(express.static(path.join(__dirname,'/public/')))
app.use(cookieparser())
app.use(session({
    secret: "whatisthis",
    resave: true,
    saveUninitialized: true
}));


require('./src/config/passport.js')(app)

app.use(bodyparser.json())//this used to be bodyparser.json()
app.use(bodyparser.urlencoded({ extended: false }));//this looks in the body and takes whatever returned by the express.json()


app.use('/sessions',sessionRouter)
app.use('/admin',adminRouter)
app.use('/auth',authRouter)




// //setting the variables
app.set('views','./src/views') //now our express app is looking in the source views for templates assicated with ejs
app.set('view engine','ejs')



// //rendering the index page
app.get('/',(req,res)=>{
    // res.send('welcome to express')
    res.render('index',{title:'welcoem to the globalmantics',data:['a','b','c']})
})

app.listen(PORT,()=>{
    console.log('servering running on port ',PORT);
})
