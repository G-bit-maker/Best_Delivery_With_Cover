const mongoose = require("mongoose");
let shopDetailsSchema = mongoose.Schema({
    ShopOwnerName: {
        type: String
    },
    shopName: {
        type: String
    },
    Address_1: {
        type: String
    },
    Address_2: {
        type: String
    },
    Phone: {
        type: String
    },
    email: {
        type: String
    },
    categorie: {
        type: String
    },
    shopType: {
        type: String
    },
    brocher: {
        type: String
    }, 
    gst: {
        type: String
    },
    swithStatus: {
        type: Boolean
    },
    createdAt: 
    { type: Date, default: new Date() },
});

module.exports = mongoose.model("shopsDetails", shopDetailsSchema, "shopsDetails")