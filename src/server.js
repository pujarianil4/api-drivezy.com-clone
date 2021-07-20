require("dotenv").config()

const express= require('express')

const app= express()

const connect =require("./config/db")

const Port= process.env.PORT

async function start(){
    await connect();
    app.listen(Port,()=>{
        console.log("localhost:8080");
    })
}

module.exports= start