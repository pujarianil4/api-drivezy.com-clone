const express= require('express')
const  LocalStorage = require('node-localstorage').LocalStorage

const localStorage = new LocalStorage('./scratch');
const app= express()

app.use(express.json())

const connect =require("./config/db")

const passport= require("./config/passport")

//  Controllers //
const CarController= require("./controllers/car.controller")

const BikeController = require("./controllers/bike.controller")

const MobileAuthController= require("./controllers/mobile.controller")

const BookingController= require("./controllers/booking.controller")

// Routes

//------- DataBase Start--------------//
app.use("/cars",CarController)

app.use("/bikes",BikeController)

app.use("/booking",BookingController)

//------- DataBase End--------------//

//--------Auth using OTP-----------//
app.use("/auth",MobileAuthController)

// ---------auth using google------//
app.use(passport.initialize())

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

app.get('/auth/google',
  passport.authenticate('google', { scope: 
    [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
] }));


app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
   const {user,token}= req.user
  
   res.status(201).send({user,token})
   


   res.redirect('http://localhost:3000');
  });


// Connection To MongoDB atlas//
async function start(){
    await connect();
    app.listen(8080,()=>{
        console.log(`localhost:${8080}`);
    })
}
start()