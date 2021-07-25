const express= require("express")

const router=express.Router()

const jwt = require("jsonwebtoken");

const User= require("../models/user.model")

const {v4:uuid}=require("uuid") 

const {accountSID,authToken,servideID} = require("../config/twilio")

const Twilio= require("twilio")(accountSID,authToken)


const newToken=(user)=>{

    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}
router.get("/", async (req,res)=>{

    res.send("test")
})

router.post("/login", async (req,res)=>{
 try{


    const mobile = await Twilio.verify.services(servideID).verifications.create({
        to:`+91${req.body.mobile}`,
        channel:"sms"
    })
 
    res.status(201).send({data: mobile})
 } catch{
    res.status(201).send({data: "wrong number"})
 }

})

router.post("/verify", async (req,res)=>{

    const mobileData = await Twilio.verify.services(servideID).verificationChecks.create({
        to:`+91${req.body.mobile}`,
        code:req.body.OTPcode
    })
   
 
    if(mobileData.status=="approved"){
       
        
        let user= await User.findOne({mobile:mobileData.to}).lean().exec()
      
       if(user){
        const token= newToken(user)
      
        return res.status(201).send({data:{user,token}})
       }


     user= await User.create({
            mobile:mobileData.to,
            mobileverified:true,
            name:req.body.name,
            password: uuid()
        })

        const token= newToken(user)

        return res.status(201).send({data:{user,token}})
    }else{
       return res.status(201).send({message:"Please Enter Valid OTP !"})
    }
    
 })


 router.get("/user/:id", async (req,res)=>{
    try{
   
   const user= await User.findById(req.params.id).lean().exec()
  
   const token= newToken(user)
      
   return res.status(201).send({data:{user,token}})
    } catch{
       res.status(201).send({data: "User Not Available"})
    }
   
   })

module.exports= router
