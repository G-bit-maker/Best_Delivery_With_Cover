const express = require("express");
const router = express.Router();
const {
    login, 
    createlogin,
    createShopDetails, 
    getShopDetails, 
    saveCategories,
    getAllCategories,
    deleteCategories,
    updateCategories,
    getUserList,
    updateShop,
    deleteShop,
    deleteUser,
    getAllShop
} = require('../controllers/adminContoller');

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

//user List
router.route("/deleteUser/:id").delete(deleteUser);

//Update Shop
router.route("/updateShop").put(updateShop);

//Delete Shop
router.route("/deleteShop/:id").delete(deleteShop);

//user List
router.route("/getAllShop").get(getAllShop);


module.exports = router;