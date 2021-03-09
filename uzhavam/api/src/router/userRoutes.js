const express = require("express");
const router = express.Router();
const {Registration} = require('../controllers/RegisterController');
const {getProducts,login,updateCart,getCartProducts,updateProfileDetails} = require('../controllers/UserController');
const auth = require("../Common/auth");

//SignUp
router.route('/signUp').post(Registration);

//Login
router.route('/signin').post(login);

//Login
router.route('/updateCart').post(auth,updateCart);

//products
router.route('/getProducts').get(auth,getProducts);

//products
router.route('/getCartDetails').get(auth,getCartProducts);

//update user
router.route("/updateProfileDetails").put(auth,updateProfileDetails);
module.exports = router;