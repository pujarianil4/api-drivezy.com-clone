require("dotenv").config()

const mongoose=require("mongoose")
const db=process.env.MONGODB_ATLAS_URL
const connect=()=>{
    return mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
}

module.exports=connect