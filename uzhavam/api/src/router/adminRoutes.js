const express = require("express");
const router = express.Router();
const {login,createlogin,createProductDetails,getproductDetails,getUserList,createCategory,getCategories} = require('../controllers/adminContoller');

//login
router.route('/login').post(login);
 
//create admin
router.route('/signUp').post(createlogin);

//category details-
router.route('/createCategory').post(createCategory);

//create Product details
router.route('/createProductDetails').post(createProductDetails);

//get Category lists
router.route("/getCategories").get(getCategories);

//get Product lists
router.route("/getProductList").get(getproductDetails);

//get user list
router.route("/getUserList").get(getUserList);
module.exports = router;