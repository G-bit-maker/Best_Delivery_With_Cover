const productModel = require("../models/productModel");
const userModel = require("../models/RegisterModel");
exports.login = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        let details = await userModel.findOne({ userName });
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
exports.getProducts = async (req, res, next) => {
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