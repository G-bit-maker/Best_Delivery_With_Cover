const express = require("express");
const router = express.Router();
const {login,createlogin} = require('../controllers/adminContoller');

//login
router.route('/login').post(login);
 
//create admin
router.route('/signUp').post(createlogin);


module.exports = router;