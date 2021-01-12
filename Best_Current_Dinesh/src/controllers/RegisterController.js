const registerModel = require("../models/RegisterModel");
exports.Registration = async (req, res, next) => {
    try {
        const { userName, mobile,email,dob,gender,address1,address2} = req.body;
        let List = {};
        List.userName = userName;
        List.mobile = mobile;
        List.email = email;
        List.dob = dob;
        List.gender = gender;
        List.address1 = address1;
        List.address2 = address2;
        let userDetails = new registerModel(List);
        userDetails.save()
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