const mongoose= require("mongoose")

const CarSchema= mongoose.Schema({
    
        Image_head:{type:String,required:false},
        Title: {type:String,required:false},
        Description: {type:String,required:false},
        Fuel_type:{type:String,required:false},
        Age_limit:{type:String,required:false},
        Car_type:{type:String,required:false},
        Price:{type:String,required:false},
        Location_Name:{Area:String,Address:String,Longitude:String,Latitude:String},
        Seats:{type:String,required:false},
        Engine_Capacity:{type:String,required:false}
    
},
{
    versionKey:false,
    timestamps: true
}
)

module.exports= mongoose.model("car",CarSchema)