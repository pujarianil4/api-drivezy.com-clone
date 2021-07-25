const express= require("express")

const router=express.Router()

const Booking = require("../models/booking.model")

router.get("/", async (req,res)=>{

    const product = await Booking.find().populate("carID").populate("bikeID").populate("user").lean().exec()

    res.status(200).send({data:product })
})

router.get("/:id", async (req,res)=>{

    const bikes = await Booking.find({user:req.params.id}).populate("carID").populate("bikeID").lean().exec()

    res.status(200).send({data:bikes })
})

router.post("/", async (req,res)=>{

    const bikes = await Booking.create(req.body)
    const product = await Booking.find({user:req.body.user}).populate("carID").populate("bikeID").lean().exec()

    res.status(200).send({data:product })
})

router.patch("/:id/:userID", async (req,res)=>{

    await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec()

    const bikes = await Booking.find({user:req.params.userID}).populate("carID").populate("bikeID").lean().exec()

    res.status(200).send({data:bikes })
})

module.exports= router