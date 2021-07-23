require("dotenv").config()
const User= require("../models/user.model")

const jwt = require("jsonwebtoken");



const {v4:uuid}=require("uuid") 

var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const newToken=(user)=>{

    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, done) {
    
  console.log("profile",profile);
    let user= await User.findOne({email: profile?._json?.email})
   
   
    
    if(user==null){
        
        user= await User.create({email:profile?._json?.email,name:profile?._json?.name,avatar:profile?._json?.picture,password:uuid(),emailverified:true})
        console.log("created",user);
    }
   
   let token= newToken(user)
   console.log(user,token);

    return done(null, {user,token})

  }
));

module.exports= passport