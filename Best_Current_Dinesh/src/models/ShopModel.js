const mongoose = require("mongoose");
let shopDetailsSchema = mongoose.Schema({
    ownerName: {
        type: String
    },
    shopName: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    category: {
        type: String
    },
    shopType: {
        type: String
    },
    brochure: {
        type: String
    }, 
    gst: {
        type: String
    },
    createdAt: 
    { type: Date, default: new Date() },
});

module.exports = mongoose.model("shopsDetails", shopDetailsSchema, "shopsDetails")