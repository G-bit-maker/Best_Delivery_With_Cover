const mongoose = require("mongoose");
let saveCategories = mongoose.Schema({
    categorieName: {
        type: String
    },
    categorieDecr: {
        type: String
    },
    fileImage: {
        type: String
    },
    swithStatus: {
        type: Boolean
    },
    createdAt: 
    { type: Date, default: new Date() },
});

module.exports = mongoose.model("saveCategories", saveCategories)