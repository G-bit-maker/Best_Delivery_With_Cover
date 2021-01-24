const mongoose = require("mongoose");
let registerSchema = mongoose.Schema({
    userName: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    }

});

module.exports = mongoose.model("userRegistration", registerSchema, "userRegistration")