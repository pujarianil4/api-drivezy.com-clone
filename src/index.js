const express= require('express')

const app= express()

app.use(express.json())

const connect =require("./config/db")

const start= require("./server")

start()