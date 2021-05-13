const mongoose = require("mongoose");
const {isEmail} = require("validator");
let registerSchema = mongoose.Schema({
    name:{
        type:String
    },
    userName: {
        type: String,
        required:[true,"Please enter user name"]
    },
    mobile: {
        type: Number,
        required:[true,"Please enter mobile number"]
    },
    email: {
        type: String
    },
    dob: {
        type: String
    },
    pincode:{
        type:String
    },
    password:{
        type:String
    }

});

module.exports = mongoose.model("userRegistration", registerSchema, "userRegistration")