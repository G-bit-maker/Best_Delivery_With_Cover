const mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
    category: {
        type: String
    }
});

let cartSchema = mongoose.Schema({
    userId: {
        type: String,
        required:[true]
    },
    count: {
        type: String,
        required:[true]
    },
    productId: {
        type: String,
        required:[true]
    }
});

let productDetailsSchema = mongoose.Schema({
    brand: {
        type: String,
        required:[true,"Please enter brand name"]
    },
    category_id:{type: Array},
    category: {
        type: String,
        required:[true,"Please select category"]
    },
    SKU: {
        type: String,
        required:[true,"Please enter SKU"]
    },
    productName: {
        type: String,
        required:[true,"Please enter product name"]
    },
    shortdescription: {
        type: String
    },
    description: {
        type: String
    },
    features: {
        type: String
    },
    specs: {
        type: String
    },
    unit_for_weight: {
        type: String,
        required:[true,"Please enter unit for weight"]
    },
    weight: {
        type: String,
        required:[true,"Please enter weight"]
    },
    avail_quantity: {
        type: String,
        required:[true,"Please enter available quantity"]
    },
    min_sale_quantity: {
        type: String,
        required:[true,"Please enter minimum sale quantity"]
    },
    max_sale_quantity: {
        type: String,
        required:[true,"Please enter maximum sale quantity"]
    },
    stock: {
        type: String,
        required:[true,"Please enter stock"]
    },
    mrp: {
        type: String,
        required:[true,"Please enter mrp"]
    },
    selling_price: {
        type: String,
        required:[true,"Please enter selling price"]
    },
    special_price: {
        type: String,
        required:[true,"Please special price"]
    },
    discount: {
        type: String
    },
    discount_amount: {
        type: String
    },
    status: {
        type: String,
        required:[true,"Please enter status"]
    },
    main_img: {
        type: String//,
        //required:[true,"Please select main image"]
    },
    img1: {
        type: String
    },
    img2: {
        type: String
    },
    img3: {
        type: String
    },
    img4: {
        type: String
    },
    small_img: {
        type: String
    },
    thumbnail_image: {
        type: String
    },
    tax_class_id: {
        type: String,
        required:[true,"Please enter tax id"]
    },
    cgst: {
        type: String
    },
    igst: {
        type: String
    },
    sgst: {
        type: String
    },
    cgst_amount: {
        type: String
    },
    igst_amount: {
        type: String
    },
    sgst_amount: {
        type: String
    },
    group_id: {
        type: String
    },
    meta_keyword: {
        type: String
    },
    url_path: {
        type: String
    },
    product_visible: {
        type: String,
        required:[true,"Please enter product visible status"]
    },
    country_of_manufacture: {
        type: String
    },
    ean: {
        type: String
    },
    retail_quantity: {
        type: String,
        required:[true,"Please enter retail quantity allowed"]
    },
    wholesale_quantity: {
        type: String,
        required:[true,"Please enter wholesale quantity allowed"]
    },
    createdAt: 
    { type: Date, default: new Date() },
});

const product = mongoose.model("productDetails", productDetailsSchema, "productDetails");
const category = mongoose.model("category", categorySchema, "category");
const userCart = mongoose.model("userCart", cartSchema, "userCart");
module.exports = {
    product,
    category,
    userCart
}