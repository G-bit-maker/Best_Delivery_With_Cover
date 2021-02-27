const express = require("express");
const router = express.Router();
const {Registration} = require('../controllers/RegisterController');
const {getProducts,login,updateCart} = require('../controllers/UserController');
const auth = require("../Common/auth");

//SignUp
router.route('/signUp').post(Registration);

//Login
router.route('/signin').post(login);

//Login
router.route('/updateCart').post(auth,updateCart);

//products
router.route('/getProducts').get(auth,getProducts);

module.exports = router;