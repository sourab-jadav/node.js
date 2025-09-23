const express=require('express')
const app=express()
const path=require('path')
const morgan=require('morgan')
const sessionRouter =express.Router()

const PORT = process.env.PORT || 3000

// // Middleware
app.use(morgan('tiny'))  //this gives a tiny of information
app.use(express.static(path.join(__dirname,'/public/')))
app.use('/sessions',sessionRouter)


// //setting the variables
app.set('views','./src/views') //now our express app is looking in the source views for templates assicated with ejs
app.set('view engine','ejs')

// //rendering the index page
app.get('/',(req,res)=>{
    // res.send('welcome to express')
    res.render('index',{title:'welcoem to the globalmantics',data:['a','b','c']})
})

sessionRouter.route('/')
.get((req,res)=>{
    // res.send('hello sessions')
})

sessionRouter.route('/1')
.get((req,res)=>{
    res.send('hello session 1')
})


app.listen(PORT,()=>{
    console.log('servering running on port ',PORT);
})
