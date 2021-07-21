const mongoose= require("mongoose")

const CarSchema= mongoose.Schema({
    id:{type:String,required:false},
    Image:{type:String,required:false},
        Title: {type:String,required:false},
        Fuel_type:{type:String,required:false},
        Age_limit:{type:String,required:false},
        Car_type:{type:String,required:false},
        Price:{type:String,required:false},
        Location:{Area:String,Address:String,Longitude:Number,Latitude:Number},
        Seats:{type:Number,required:false},
        Engine_Capacity:{type:String,required:false},
        Transmission_type:{type:String,required:false},
        Sub_area:[{
            area:{type:String,required:false},
            distance:{type:String,required:false}
        }]
},
{
    versionKey:false,
    timestamps: true
}
)

module.exports= mongoose.model("car",CarSchema)

// {
//     "id": 7,
//     "Image": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701126_vitara-breeza.png",
//     "Title": "Brezza LDI",
//     "Fuel_type": "Disel",
//     "Age_limit": 18,
//     "Car_type": "SUV",
//     "Price": "₹1,566.72",
//     "Location": {
//       "Area": "Vijayanagar",
//       "Address": "Near Veeresh Theatre, Govindaraja Nagar Ward, MC Layout, Vijayanagar, Bengaluru 560040",
//       "Longitude": 77.544762,
//       "Latitude": 12.973209
//     },
//     "Seats": 5,
//     "Engine_capacity": "1462 cc ",
//     "Transmission_type": "Manual",
//     "Sub_area": [
//       {
//         "area": "Vijayanagar",
//         "distance": "0.0 km away"
//       },
//       {
//         "area": "RR Nagar",
//         "distance": "14.6 km away"
//       },
//       {
//         "area": "Maithikera",
//         "distance": "Approx 9.3 km away"
//       }
//     ]
//   }