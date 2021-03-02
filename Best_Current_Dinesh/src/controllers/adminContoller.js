const jwt = require("jsonwebtoken");
const config = require("../config");
const LoginModel = require("../models/adminloginModel");
const shopModel = require("../models/ShopModel");
const saveCategories = require("../models/categorieModel");
const users = require("../models/RegisterModel")
const bcrypt = require("bcryptjs");
const mongodb = require("mongodb");
const ObjectID = require('mongodb').ObjectID;


exports.login = async (req, res, next) => {
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
        let {shopName, categorie} = req.body
        if(shopName && categorie){
            let shopDetails = new shopModel(req.body);
            shopDetails.save()
                .then(function (data) {
                    res.status(200).json({
                        list:data,
                        success: "Created Successfully"
                    });
                })
                .catch(function (error) {
                    res.status(500).json({
                        failure:{
                            message:  "Not Added"
                        }
                    });
                });
        }else{
            res.status(200).json({
                failure: {
                    message: "Shop Name, Categories are mandatories"
                }
            });
        }
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
                success:{
                    list: details,
                    message:"seccess"
                }
            });
        }else{
            res.status(200).json({
                failure:{
                    message:"No lists are available"
                }
            });
        }
    } catch (err) {
        return res.status(500).json({
            message:"No lists are available"
        });
    }
};

exports.saveCategories = async (req, res, next) => {
    try {
        const { categorieName, categorieDecr, swithStatus, fileImage } = req.body;
        if(categorieName !== "" || categorieDecr !== "" || fileImage !== ""){
            let Exist = await saveCategories.findOne({categorieName})
            if(Exist){
                return res.status(200).json({
                    failure:{
                        message:"This Categorie is Already Exist"
                    }
                });
            }else{
                let dataToSave = new saveCategories({
                    categorieName,
                    categorieDecr,
                    swithStatus,
                    fileImage
                })
                await dataToSave.save()
                .then((response)=>{
                    return res.status(200).json({
                        success:{
                            message:"Categorie Saved"
                        }
                    });
                })
            }
        }else{
            return res.status(200).json({
                failure:{
                    message:"Please fill all details"
                }
            });
        }
    } catch (err) {
        return res.status(400).json({
            failure : {
                message:"No lists are available"
            }
        });
    }
};

exports.getAllCategories = async (req, res, next) => {
    try {
        let details = await saveCategories.find();
        if(details && details.length !== 0){
            res.status(200).json({
                success:{
                    list: details,
                    message:"seccess"
                }
            });
        }else{
            res.status(200).json({
                failure:{
                    message:"No lists are available"
                }
            });
        }
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};

exports.deleteCategories = async (req, res, next) => {
    try {
        let _id= req.params.id
        let result = await saveCategories.deleteOne({_id : new mongodb.ObjectId(_id)}, function(err, obj) {
            if (err){
                res.json({
                    failure:{
                        message: err
                    }
                })
            }
            else{
                res.status(200).json({
                    success: {
                        message : "deleted successfully"
                    }
                })
            }
            });
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};

exports.updateCategories = async (req, res, next) => {
    try {
        let {_id} = req.body;
        let objData = {
            categorieName:  req.body.categorieName,
            categorieDecr:  req.body.categorieDecr,
            swithStatus:  req.body.swithStatus,
            fileImage:  req.body.fileImage
        }
        let result = await saveCategories.updateOne(
            {_id : new mongodb.ObjectId(_id)},
            { $set: objData }, function(err, obj){
                if (err) {
                    res.json({
                        failure:{
                            message: err
                        }
                    })
                }
                else{
                    res.status(200).json({
                        success: {
                            message : "Updated successfully"
                        }
                    })
                }
            }
        );
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};

exports.getUserList = async (req, res, next) => {
    try {
        let details = await users.find();
        if(details && details.length !== 0){
            res.status(200).json({
                    users: details,
                    message:"seccess"
            });
        }else{
            res.status(200).json({
                failure:{
                    message:"No users are available"
                }
            });
        }
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};

exports.updateShop = async (req, res, next) => {
    try {
        let {_id} = req.body;
        let result = await shopModel.updateOne(
            {_id : new mongodb.ObjectId(_id)},
            { $set: req.body }, function(err, obj){
                if (err) {
                    res.json({
                        failure:{
                            message: err
                        }
                    })
                }
                else{
                    res.status(200).json({
                        success: {
                            message : "Updated successfully"
                        }
                    })
                }
            }
        );
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};

exports.deleteShop = async (req, res, next) => {
    try {
        let _id= req.params.id
        let result = await shopModel.deleteOne({_id : new mongodb.ObjectId(_id)}, function(err, obj) {
            if (err){
                res.json({
                    failure:{
                        message: err
                    }
                })
            }
            else{
                res.status(200).json({
                    success: {
                        message : "deleted successfully"
                    }
                })
            }
            });
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        let _id= req.params.id
        let result = await users.deleteOne({_id : new mongodb.ObjectId(_id)}, function(err, obj) {
            if (err){
                res.json({
                    failure:{
                        message: err
                    }
                })
            }
            else{
                res.status(200).json({
                    success: {
                        message : "deleted successfully"
                    }
                })
            }
            });
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};

exports.getAllShop = async (req, res, next) => {
    try {
        let details = await shopModel.find();
        if(details && details.length !== 0){
            res.status(200).json({
                    users: details,
                    message:"seccess"
            });
        }else{
            res.status(200).json({
                failure:{
                    message:"No users are available"
                }
            });
        }
    } catch (err) {
        return res.status(500).json({
            failure:{
                message:"something went wrong"
            }
        });
    }
};