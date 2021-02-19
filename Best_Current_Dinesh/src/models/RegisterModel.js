const mongoose = require("mongoose");
let registerSchema = mongoose.Schema({
    Name: {
        type: String,
       // required:[true,"Please enter name"]
    },
    mobile: {
        type: Number,
        //required:[true,"Please enter mobile number"],
    },
    email: {
        type: String
    },
    password: {
        type: String,
        //required:[true,"Please enter password"],
    }

});

module.exports = mongoose.model("userRegistration", registerSchema, "userRegistration")