 const mongoose = require('mongoose')
let studetails = new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        stnm:String,
        dept:String,
        location:String,
        email:String,
        email:String,
        contact:Number,
        cgpa:Number 

    }
)
module.exports = mongoose.model("studetails",studetails)