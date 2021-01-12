const express = require("express");
const router = express.Router();
const {Registration} = require('../controllers/RegisterController');

//SignUp
router.route('/signUp').post(Registration);

module.exports = router;