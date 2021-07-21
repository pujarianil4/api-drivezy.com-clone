// require("dotenv").config()
// const jwt= require("jsonwebtoken");

// const verifyToken=(token)=>{
//     return new Promise((resolve,reject)=>{
//         jwt.verify(token,process.env.JWT_SECRET_KEY,(err,payload)=>{
//             if(err) return reject(err)

//             return resolve(payload)
//         })
//     })
// }

// const protect= async (req,res,next)=>{
// const bearerToken= req.headers.authentication
//     if(! bearerToken ||   ! bearerToken.startsWith("Bearer")){
//         return res.status(400).send({status:"failed",message:"Please Enter valid token"})
//     }
   
//     const token= bearerToken.split(" ")[1]

//     const payload= await verifyToken(token)
//     if(!payload){
//         return res.status(400).send({status:"failed",message:"Please Enter valid token"})
//     }
//     req.user=payload
//     next()
// }

// module.exports=protect