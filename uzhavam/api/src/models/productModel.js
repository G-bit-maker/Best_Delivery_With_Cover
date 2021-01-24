const mongoose = require("mongoose");
let productDetailsSchema = mongoose.Schema({
    productName: {
        type: String
    },
    productImage: {
        type: String
    },
    productType: {
        type: String
    },
    rate: {
        type: Number
    },
    description: {
        type: String
    },
    quantity: {
        type: String
    },
    createdAt: 
    { type: Date, default: new Date() },
});

module.exports = mongoose.model("productDetails", productDetailsSchema, "productDetails")