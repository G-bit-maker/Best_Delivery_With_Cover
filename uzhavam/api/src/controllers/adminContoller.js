const jwt = require("jsonwebtoken");
const config = require("../config");
const LoginModel = require("../models/adminloginModel");
const productModel = require("../models/productModel");
const userModel = require("../models/RegisterModel");
exports.login = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        let details = await LoginModel.findOne({ userName });
        if (details.userName === userName) {
            let token = jwt.sign({ id: details._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).json({
                success: "Login Successfully",
                auth: true,
                token: token
            });
        } else {
            res.status(500).json({
                failure: "Invalid Details"
            });
        }
    } catch (err) {
        return res.status(500).json({
            failure: "Invalid Details"
        });
    }
};
exports.createlogin = async (req, res, next) => {
    try {
        let List = {};
        List.userName = "Admin";
        List.password = "admin123";
        let loginModel = new LoginModel(List)
        loginModel.save()
            .then(function (data) {
                res.status(200).json({
                    success: "Created Successfully"
                });
            })
            .catch(function (error) {
                res.status(500).json({
                    failure: "Not Added"
                });
            });
    } catch (err) {
        return res.status(500).json({
            failure: "Invalid Details"
        });
    }
};

exports.createProductDetails = async (req, res, next) => {
    try {
        const { productName, productImage,productType,rate,description,quantity,createdAt } = req.body;
        let List = {};
        List.productName = productName;
        List.productImage = productImage;
        List.productType = productType;
        List.rate = rate;
        List.description = description;
        List.quantity = quantity;
        List.createdAt = createdAt;
        let productDetails = new productModel(List);
        productDetails.save()
            .then(function (data) {
                res.status(200).json({
                    list:data,
                    success: "Created Successfully"
                });
            })
            .catch(function (error) {
                res.status(500).json({
                    failure: "Not Added"
                });
            });
    } catch (err) {
        return res.status(500).json({
            failure: "Invalid Details"
        });
    }
};

exports.getproductDetails = async (req, res, next) => {
    try {
        let details = await productModel.find();
        if(details && details.length !== 0){
            res.status(200).json({
                list:details
            });
        }else{
            res.status(200).json({
                message:"No lists are available"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message:"No lists are available"
        });
    }
};
exports.getUserList = async (req, res, next) => {
    try {
        let details = await userModel.find();
        if(details && details.length !== 0){
            res.status(200).json({
                list:details
            });
        }else{
            res.status(200).json({
                message:"No lists are available"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message:"No lists are available"
        });
    }
};
