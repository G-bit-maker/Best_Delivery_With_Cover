const registerModel = require("../models/RegisterModel");

const handleErrors = (err) =>{
      console.log(Object.values(err.errors))
}
exports.Registration = async (req, res, next) => {
    try {
        //const { Name, mobile,email,password} = req.body;
        let userDetails = new registerModel(req.body);
        userDetails.save()
            .then(function (data) {
                res.status(200).json({
                    list:data,
                    success: "Created Successfully"
                });
            })
            .catch(function (error) {
                handleErrors(error)
                res.status(200).json({
                    failure: error
                });
            });
    } catch (err) {
        return res.status(500).json({
            failure: err
        });
    }
};