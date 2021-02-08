const mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
    category: {
        type: String
    }
});

let productDetailsSchema = mongoose.Schema({
    brand: {
        type: String
    },
    category_id:{type: Array},
    category: {
        type: String
    },
    SKU: {
        type: String
    },
    productName: {
        type: String
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
        type: String
    },
    weight: {
        type: String
    },
    avail_quantity: {
        type: String
    },
    min_sale_quantity: {
        type: String
    },
    max_sale_quantity: {
        type: String
    },
    stock: {
        type: String
    },
    mrp: {
        type: String
    },
    selling_price: {
        type: String
    },
    special_price: {
        type: String
    },
    discount: {
        type: String
    },
    discount_amount: {
        type: String
    },
    status: {
        type: String
    },
    main_img: {
        type: String
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
        type: String
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
        type: String
    },
    country_of_manufacture: {
        type: String
    },
    ean: {
        type: String
    },
    createdAt: 
    { type: Date, default: new Date() },
});

const product = mongoose.model("productDetails", productDetailsSchema, "productDetails");
const category = mongoose.model("category", categorySchema, "category");
module.exports = {
    product,
    category
}