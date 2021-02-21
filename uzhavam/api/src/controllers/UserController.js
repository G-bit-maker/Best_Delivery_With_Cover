const jwt = require("jsonwebtoken");
const config = require("../config");
const productModel = require("../models/productModel");
const userModel = require("../models/RegisterModel");
const message = require("../Common/constants");
var TeleSignSDK = require('telesignsdk');
/* let plivo = require('plivo');
let client = new plivo.Client(); */



exports.login = async (req, res, next) => {
    try {
        /* client.messages.create(
            '8270925532',
            '9597172065',
            'Hello, world!'
          ).then(function(message_created) {
            console.log(message_created)
          }); */
          
        /* const { userName, password } = req.body;
        let details = await userModel.findOne({ userName });
        const customerId = "13902ABF-3126-4A03-A4DC-7C5CAC8E2F74";
        const apiKey = "d8oMo5HVQkhN2GzkKf/lpCyXU+VWXuw/4VnwbqlavJhYC+5NEO3Of/DCpj6zUepIMVhqWXxDi2h0PmxAqYReRQ==";
        const rest_endpoint = "https://rest-api.telesign.com";
        const timeout = 10*1000; // 10 secs

        const client = new TeleSignSDK( customerId,
            apiKey,
            rest_endpoint,
            timeout // optional
            // userAgent
        );
        const phoneNumber = "9597172065";
        const message = "You're scheduled for a dentist appointment at 2:30PM.";
        const messageType = "ARN";
      
        console.log("## MessagingClient.message ##");
      
        function messageCallback(error, responseBody) {
            if (error === null) {
                console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
                    ` => code: ${responseBody['status']['code']}` +
                    `, description: ${responseBody['status']['description']}`);
            } else {
                console.error("Unable to send message. " + error);
            }
        }
        client.sms.message(messageCallback, phoneNumber, message, messageType); */
        const { userName, password } = req.body;
        let failure = "";
        let details = await userModel.findOne({ userName });    
        if(!userName){
            failure = {...failure,"emailFailure":"Please enter user name"}
        }else if(details === "" || details === null){
            failure = {...failure,"emailFailure":"Please enter valid user name"}
        }
        if(!password){
            failure = {...failure,"passFailure":"Please enter password"}
        }

        if(failure){
            res.status(200).json({
                failure: failure,
            });
        }else{
            let token = jwt.sign({ id: details._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).json({
                success: "Login Successfully",
                auth: true,
                token: token
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
        const { id } = req.user;
        if(id){
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