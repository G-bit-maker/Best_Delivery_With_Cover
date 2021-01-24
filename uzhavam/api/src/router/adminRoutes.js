const express = require("express");
const router = express.Router();
const {login,createlogin,createProductDetails,getproductDetails,getUserList} = require('../controllers/adminContoller');

//login
router.route('/login').post(login);
 
//create admin
router.route('/signUp').post(createlogin);

//create Shop details
router.route('/createProductDetails').post(createProductDetails);

//get shop lists
router.route("/getProductList").get(getproductDetails);

//get user list
router.route("/getUserList").get(getUserList);
module.exports = router;