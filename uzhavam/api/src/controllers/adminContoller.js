const jwt = require("jsonwebtoken");
const config = require("../config");
const LoginModel = require("../models/adminloginModel");
const productModel = require("../models/productModel");
const userModel = require("../models/RegisterModel");
const message = require("../Common/constants");
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

exports.createCategory = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { category,status,category_id } = req.body;
        let List = {};
        List.category = category;
        if(id){
            if(status === "Add"){
                let categoryDetails = new productModel.category(List);
                categoryDetails.save()
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
            }else{
                productModel.category.findOneAndDelete({"_id":category_id})
                .then(function(data){
                    res.status(200).json({
                        success:"List deleted Successfully"
                    })     
                })
                .catch(function(error){
                    res.status(500).json({
                        success:"Not deleted"
                    });
                })
            }
        }else{
            return res.status(500).json({
                message:message.Token_Invalid
            });    
        }
    } catch (err) {
        return res.status(500).json({
            failure: "Invalid Details"
        });
    }
};

exports.getCategories = async (req, res, next) => {
    try {
        const { id } = req.user;
        if(id){
            let details = await productModel.category.find();
            if(details && details.length !== 0){
                res.status(200).json({
                    list:details
                });
            }else{
                res.status(200).json({
                    message:"No lists are available"
                });
            }
        }else{
            return res.status(500).json({
                message:message.Token_Invalid
            });    
        }
    } catch (err) {
        return res.status(500).json({
            message:"No lists are available"
        });
    }
};

exports.createProductDetails = async (req, res, next) => {
    try {
        let List = req.body;
        const { id } = req.user;
        if(id){
            if(List.addStatus === "Add"){
                const category = await productModel.category.find({category:List.category});
                List.category_id = category && category.length !== 0 ? category.map(itme=>itme._id):"";
                let productDetails = new productModel.product(List);
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
            }else{
                productModel.product.findOneAndDelete({"_id":List.product_id})
                .then(function(data){
                    res.status(200).json({
                        success:"List deleted Successfully"
                    })     
                })
                .catch(function(error){
                    res.status(500).json({
                        success:"Not deleted"
                    });
                })
            }
        }else{
            return res.status(500).json({
                message:message.Token_Invalid
            });    
        }
    } catch (err) {
        return res.status(500).json({
            failure: "Invalid Details"
        });
    }
};

exports.getproductDetails = async (req, res, next) => {
    try {
        const { id } = req.user;
        if(id){
            let details = await productModel.product.find();
            if(details && details.length !== 0){
                res.status(200).json({
                    list:details
                });
            }else{
                res.status(200).json({
                    message:"No lists are available"
                });
            }
        }else{
            return res.status(500).json({
                message:message.Token_Invalid
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
        const { id } = req.user;
        if(id){
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
        }else{
            return res.status(500).json({
                message:message.Token_Invalid
            });    
        }
    } catch (err) {
        return res.status(500).json({
            message:"No lists are available"
        });
    }
};
