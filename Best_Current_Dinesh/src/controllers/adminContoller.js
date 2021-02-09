const jwt = require("jsonwebtoken");
const config = require("../config");
const LoginModel = require("../models/adminloginModel");
const shopModel = require("../models/ShopModel");
const bcrypt = require("bcryptjs");


exports.login = async (req, res, next) => {
    console.log(req.body)
    try {
        const { userName, password } = req.body;
        let details = await LoginModel.findOne({ userName });
        var validpass = await bcrypt.compare(req.body.password,details.password);
        if(!validpass){
            return res.status(200).json(message.error_passwoardNotValid)
        }
        else{
            if (details.userName === userName) {
                let token = jwt.sign({ id: details._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).json({
                    success: "Login Successfully",
                    auth: true,
                    token: token,
                    userType: "Admin"
                });
            } else {
                res.status(200).json({
                    failure: "Invalid Details"
                });
            }
        }
    } catch (err) {
        return res.status(200).json({
            failure: "Invalid Details"
        });
    }

};
exports.createlogin = async (req, res, next) => {
    try{     
        var hash = await bcrypt.hash("admin123",10);
        const user = new LoginModel({
            userName: "Admin",
            password: hash,
        });
        let data = await user.save();
        res.json({ 
                    success: "Sucess"
                })
    }catch(err){
        res.status(400).json(err)
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