const mongoose= require("mongoose")

const BikeSchema= mongoose.Schema({
    
    id:{type:String,required:false},
    Image:{type:String,required:false},
        Title: {type:String,required:false},
        Fuel_type:{type:String,required:false},
        Age_limit:{type:String,required:false},
        Bike_type:{type:String,required:false},
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

module.exports= mongoose.model("bike",BikeSchema)

// {
//     "id": 1,
//     "Image": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1560593537_honda-xblade.png",
//     "Title": "Honda XBlade",
//     "Fuel_type": "Petrol",
//     "Age_limit": 18,
//     "Bike_type": "Motercycle",
//     "Price": "1261",
//     "Location": {
//       "Area": "Bommanahalli",
//       "City": "Bengaluru",
//       "Address": "Bommanahalli, Bengaluru, Karnataka 560068",
//       "Longitude": 77.616859,
//       "Latitude": 12.899162
//     },
//     "Seats": 2,
//     "Engine_capacity": "162.00 cc",
//     "Transmission_type": "Geared",
//     "Sub_area": [
//       { "area": "Bommanahalli", "distance": "0.0 km away" },
//       { "area": "MS Palya-New", "distance": "Approx 35.6 km away" },
//       { "area": "Mathikere", "distance": "Approx 25.3 km away" },
//       {
//         "area": "Mysore Road(Near R.V College of Engineering",
//         "distance": "Approx 22.8 km away"
//       },
//       { "area": "Vijayanagar", "distance": "Approx 19.8 km away" },
//       { "area": "Koraemangala Agara", "distance": "Approx 5.2 km away" },
//       {
//         "area": "Mysore Road Satellite Bus Stand",
//         "distance": "Approx 18 km away"
//       },
//       { "area": "BTM Layout", "distance": "Approx 4.6 km away" },
//       {
//         "area": "Manpho Convention Center (NEW)",
//         "distance": "Approx 24.8 km away"
//       },
//       {
//         "area": "Marathahalli, Outer Ring Road",
//         "distance": "Approx 24.8 km away"
//       }
//     ]
//   }