const express = require("express");
const router = express.Router();
const {login, 
    createlogin,
    createShopDetails, 
    getShopDetails, 
    saveCategories,
    getAllCategories,
    deleteCategories,
    updateCategories,
    getUserList,
    updateShop,
    deleteShop} = require('../controllers/adminContoller');

//login
router.route('/login').post(login);
 
//create admin
router.route('/signUp').post(createlogin);

//create Shop details
router.route('/createShopDetails').post(createShopDetails);

//get shop lists
router.route("/getShopList").get(getShopDetails);

//create categories
router.route("/saveCategories").post(saveCategories);

//getAllCategories
router.route("/getAllCategories").get(getAllCategories);

//Delete Categories
router.route("/deleteCategories/:id").delete(deleteCategories);

//Update Categories
router.route("/updateCategories").put(updateCategories);

//user List
router.route("/getAllUsers").get(getUserList);

//Update Shop
router.route("/updateShop").put(updateShop);

//Delete Shop
router.route("/deleteShop").delete(deleteShop);



module.exports = router;