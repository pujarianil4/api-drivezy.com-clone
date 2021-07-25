const mongoose = require('mongoose')

const bookingSchema= mongoose.Schema({
  carID:{type:mongoose.Schema.Types.ObjectId,ref:"car",required:false},
  bikeID:{type:mongoose.Schema.Types.ObjectId,ref:"bike",required:false},
    price:{type:String,required:false},
    package:{type:String,required:false},
    pickup:{type:String,required:false},
    drop:{type:String,required:false},
    payment:{type:Boolean,required:false},
    status:{type:Boolean,required:false},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:false},
  },{
      versionKey:false,
      timestamps: true
  }
  );

  module.exports= mongoose.model("booking",bookingSchema)