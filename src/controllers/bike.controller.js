const express= require("express")

const router=express.Router()

const Bike= require("../models/bike.model")

router.get("/", async (req,res)=>{

    const bikes = await Bike.find().lean().exec()

    res.status(200).send({data:bikes })
})

router.post("/", async (req,res)=>{

    const bikes = await Bike.create(req.body)

    res.status(200).send({data:bikes })
})

module.exports= router