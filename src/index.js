const express= require('express')

const app= express()

app.use(express.json())

const connect =require("./config/db")

//  Controllers //
const CarController= require("./controllers/car.controller")

const BikeController = require("./controllers/bike.controller")

const MobileAuthController= require("./controllers/mobile.controller")
// Routes

//------- DataBase Start--------------//
app.use("/cars",CarController)

app.use("/bikes",BikeController)

//------- DataBase End--------------//

app.use("/auth",MobileAuthController)




// Connection To MongoDB atlas//
async function start(){
    await connect();
    app.listen(8080,()=>{
        console.log(`localhost:${8080}`);
    })
}
start()