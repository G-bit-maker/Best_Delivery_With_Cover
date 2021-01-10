const jwt = require("jsonwebtoken");
const config = require("../config");
const LoginModel = require("../models/adminloginModel");
const shopModel = require("../models/ShopModel");
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

exports.createShopDetails = async (req, res, next) => {
    try {
        const { ownerName, shopName,address1,address2,phone,email,category,shopType,brochure,gst,createdAt } = req.body;
        let List = {};
        List.ownerName = ownerName;
        List.shopName = shopName;
        List.address1 = address1;
        List.address2 = address2;
        List.phone = phone;
        List.email = email;
        List.category = category;
        List.shopType = shopType;
        List.brochure = brochure;
        List.gst = gst;
        List.createdAt = createdAt;
        let shopDetails = new shopModel(List);
        shopDetails.save()
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

exports.getShopDetails = async (req, res, next) => {
    try {
        let details = await shopModel.find();
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