const mongoose = require("mongoose");
let productModel = mongoose.Schema({
    productName: {
        type: String
    },
    categorie: {
        type: String
    },
    productImage: {
        type: String
    },
    price: {
        type: Number
    },
    showStatus: {
        type: Boolean
    },
    createdAt: 
    { type: Date, default: new Date() },
});

module.exports = mongoose.model("productModel", productModel)