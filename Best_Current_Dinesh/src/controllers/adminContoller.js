const jwt = require("jsonwebtoken");
const LoginModel = require("../models/adminloginModel")
    exports.login = async(req, res, next)=> {
        const { userName, password } = req.body;
        LoginModel.findOne({ userName })
            .then(function (data) {
                let token = jwt.sign({ id: data._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).json({
                    success: "Login Successfully",
                    auth: true,
                    token: token
                })
            })
            .catch(function (error) {
                res.status(500).json({
                    failure: "Not Added"
                });
            })
    };
    exports.createlogin = async(req, res, next)=> {
        let List = {};
        List.userName = "Admin";
        List.password = "admin123";
        let loginModel = new LoginModel(List) 
        loginModel.save()
            .then(function (data) {
                res.status(200).json({
                    success: "Created Successfully"
                })
            })
            .catch(function (error) {
                res.status(500).json({
                    failure: "Not Added"
                });
            })
    };