const mongoose = require('mongoose')

const bcrypt= require("bcrypt")

const UserSchema= mongoose.Schema({
  mobile:{type:String,required:false},
  mobileverified:{type:Boolean,required:false},
    email:{type:String,required:false},
    emailverified:{type:Boolean,required:false},
    password:{type:String,required:true}
  },{
      versionKey:false,
      timestamps: true
  }
  );

  UserSchema.pre("save",function (next){
    if(!this.isModified("password")) return next()

      bcrypt.hash(this.password,8,(err,hash)=>{
        if(err) return next(err);

        this.password=hash
        next()
      })
  });

  UserSchema.methods.checkpassword= function (password){
    return new Promise((resolve,reject)=>{
      bcrypt.compare(password, this.password, (err,same)=>{
        if(err) return reject(err)

        return resolve(same)
      })
    })
  }
  
module.exports= mongoose.model("user",UserSchema)