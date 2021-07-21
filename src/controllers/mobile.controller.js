const express= require("express")

const router=express.Router()

const Mobile= require("../models/mobile.model")

const {accountSID,authToken,servideID} = require("../config/twilio")

const twilio= require("twilio")(accountSID,authToken)

router.post("/login", async (req,res)=>{

   const mobileData= await twilio.verify.services(servideID).verifications.create({
       to:`+91${req.body.mobile}`,
       channel:"sms"
   })

   res.status(201).send({data:mobileData})
})

router.post("/verify", async (req,res)=>{

    const mobileData= await twilio.verify.services(servideID).verificationChecks.create({
        to:`+91${req.body.mobile}`,
        code: req.body.OTPcode
    })
 
    if(mobileData.status=="approved"){
        const mobile= await Mobile.create({
            mobile:mobileData.to,
            isverified:true
        })

        return res.status(201).send({data:mobile})
    }else{
       return res.status(201).send({message:"Please Enter Valid OTP !"})
    }
    
 })

module.exports= router
