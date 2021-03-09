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
            let userCart = await productModel.userCart.find({userId:id});
            let details = await productModel.product.find();
            res.status(200).json({
                list:details,
                userCart
            });
            //console.log(userCart,details)
            /* if(details && details.length !== 0){
                if(userCart && userCart.length !==0){
                    userCart.map((data)=>{
                        let i = details.findIndex(x=>x._id.toString() === data.productId)
                        if(i !== -1 ){
                            console.log(data.productId,i)
                            let obj = {}
                            obj.count = data.count
                            console.log(obj)
                            details[i] = obj
                        }
                    })
                }
                res.status(200).json({
                    list:details,
                    userCart
                });
            }else{
                res.status(200).json({
                    message:"No lists are available"
                });
            } */
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
exports.getCartProducts = async (req, res, next) => {
    try {
        const { id } = req.user;
        if(id){

            let userCart = await productModel.userCart.find({userId:id});
            let details = await productModel.product.find()
            let newarr=[];
            userCart.map(x=>{
                let i = details.findIndex(y=>y._id == x.productId)
                if(i != -1){
                    let obj = details[i]
                    obj.count = x.count
                    newarr.push(obj)
                }
            })
            res.status(200).json({
                list:newarr
            });
            

           /*  let userCart = await productModel.userCart.find({});
            let iddd=userCart.map(x=>x.productId)
            console.log(iddd)
            let details = await productModel.product.find({_id:iddd})
            res.status(200).json({
                list:details,
                userCart
            });
             */
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
exports.updateCart = async (req, res, next) => {
    let obj = req.body;
        const { id } = req.user;
         if(id){
            obj.userId = id
            //let cartDetails = new productModel.userCart()
            if(obj.count == "0"){
                productModel.userCart.findOneAndDelete({userId:id,productId:obj.productId})
                .then((data)=>{
                    res.status(200).json({
                        data
                    });
                })
            }else{
                productModel.userCart.findOneAndUpdate({userId:id,productId:obj.productId},
                    {$set:{count:obj.count,userId:id,productId:obj.productId}}, 
                    {new: true},(err, doc)=>{
                        if (err) {
                            res.status(200).json({
                                err
                            });
                        }else{
                            if(doc === null){
                                productModel.userCart(obj).save()
                                .then((data)=>{
                                    res.status(200).json({
                                        data
                                    });
                                })
                            }else{
                                res.status(200).json({
                                    doc
                                });
                            }
                            
                        }
                    
                    })
            }
            }
};

exports.updateProfileDetails = async (req, res, next) => {
    try {
        let {userName, mobile,email,dob,gender,address1,address2} = req.body;
        const { id } = req.user;
        if(id){
            let List = {userName, mobile,email,dob,gender,address1,address2};
            userModel.findOneAndUpdate({_id : id},List)
            .then(function(data){
                res.status(200).json({
                    success:"User edited Successfully"
                })     
             })
             .catch(function (error) {
                res.status(200).json({
                    failure: handleErrors(error)
                });
            });
        }else{
            return res.status(500).json({
                message:message.Token_Invalid
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