const mongoose = require('mongoose')

const bookingSchema= mongoose.Schema({
  carID:{type:mongoose.Schema.Types.ObjectId,ref:"car",required:true},
  bikeID:{type:mongoose.Schema.Types.ObjectId,ref:"bike",required:true},
    price:{type:String,required:true},
    package:{type:String,required:true},
    pickup:{type:String,required:true},
    drop:{type:String,required:true},
    payment:{type:Boolean,required:true},
    status:{type:Boolean,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
  },{
      versionKey:false,
      timestamps: true
  }
  );

  module.exports= mongoose.model("booking",bookingSchema)