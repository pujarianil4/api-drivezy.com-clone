const mongoose = require('mongoose')

const MobileSchema= mongoose.Schema({
  mobile:{type:String,required:false},
    isverified:{type:Boolean,required:true}
  },{
      versionKey:false,
      timestamps: true
  }
  );

  module.exports= mongoose.model("mobile",MobileSchema)