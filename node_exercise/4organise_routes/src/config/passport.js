const passport=require('passport')
require('./strategies/local.strategy')()
/**
 * 
 * passport is going to maintain login sessions 
 * as the request is loaded it is going to deserialize the user and add that to the session 
 * 
 * passport.serializeUser() takes callback as argument with parameters user and done func
 */
module.exports = function passportConfig(app){
    app.use(passport.initialize())
    app.use(passport.session())

    passport.serializeUser((user,done)=>{
        done(null,user);//doing this gets user added to the session
    })

    passport.deserializeUser((user,done)=>{
        done(null,user)
    })

    /**
     * next comes the strategy
     * we are going to use localstrategy
     */
    

}
