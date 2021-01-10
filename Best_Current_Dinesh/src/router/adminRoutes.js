const express = require("express");
const router = express.Router();
const {login,createlogin,createShopDetails,getShopDetails} = require('../controllers/adminContoller');

//login
router.route('/login').post(login);
 
//create admin
router.route('/signUp').post(createlogin);

//create Shop details
router.route('/createShopDetails').post(createShopDetails);

//get shop lists

router.route("/getShopList").get(getShopDetails);

module.exports = router;