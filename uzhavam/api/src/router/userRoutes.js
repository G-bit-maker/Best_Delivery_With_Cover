const express = require("express");
const router = express.Router();
const {Registration} = require('../controllers/RegisterController');
const {getProducts,login} = require('../controllers/UserController');

//SignUp
router.route('/signUp').post(Registration);

//Login
router.route('/signin').post(login);

//products
router.route('/getProducts').get(getProducts);

module.exports = router;