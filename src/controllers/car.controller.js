const express= require("express")

const router=express.Router()

const Car= require("../models/car.model")

router.get("/", async (req,res)=>{

    const cars= await Car.find().lean().exec()

    res.status(200).send({data:cars})
})
router.get("/:id", async (req,res)=>{

    const cars= await Car.findById(req.params.id).lean().exec()

    res.status(200).send({data:cars})
})

router.post("/", async (req,res)=>{

    const cars= await Car.create(req.body)

    res.status(200).send({data:cars})
})

module.exports= router