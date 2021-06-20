import {proxy} from './config';
const urls={
    userLogin:`${proxy}user/signin`,
    getProductForUser:`${proxy}user/getProducts`,
    getCartDetails:`${proxy}user/getCartDetails`,
    getAddressList:`${proxy}user/getAddress`,
    updateCart:`${proxy}user/updateCart`,
    addressSave:`${proxy}user/addressSave`,
    placeOrder:`${proxy}user/placeOrder`,

    //admin
    orderStatus:`${proxy}admin/updateOrderStatus`,
    addEditUser:`${proxy}admin/updateUserDetails`,
    adminLogin:`${proxy}admin/login`,
    getCategory:`${proxy}admin/getCategories`,
    getCategoryForUser:`${proxy}admin/getCategories`,
    addProductList:`${proxy}admin/createProductDetails`,
    getProductList:`${proxy}admin/getProductList`,
    getProductDetails:`${proxy}admin/getProduct`,
    getUserList:`${proxy}admin/getUserList`,
    getUserDetails:`${proxy}admin/getUserList`,
    userRemove:`${proxy}admin/deleteUser`,

    //both
    getOrderList:{
        User:`${proxy}user/getOrderHistory`,
        Admin:`${proxy}admin/getUsersOrder`
    },
    getProfileDetails:{
        User:`${proxy}user/getUserById`,
        Admin:`${proxy}admin/getUserById`
    },
    profileDetailSave:{
        User:`${proxy}user/updateProfileDetails`,
        Admin:`${proxy}admin/updateUserDetails`
    },
    getOrderById:{
        User:`${proxy}user/getOrderById`,
        Admin:`${proxy}admin/getOrderById`
    },
}

export default urls