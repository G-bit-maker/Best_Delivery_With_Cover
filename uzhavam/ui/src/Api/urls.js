const urls={
    userLogin:"/user/signin",
    getProductForUser:"/user/getProducts",
    getCartDetails:"/user/getCartDetails",
    getAddressList:"/user/getAddress",
    getOrderById:"/user/getOrderById",
    updateCart:"/user/updateCart",
    addressSave:"/user/addressSave",
    placeOrder:"/user/placeOrder",

    //admin
    orderStatus:"/admin/updateOrderStatus",
    addEditUser:"/admin/updateUserDetails",
    adminLogin:"/admin/login",
    getCategory:"/admin/getCategories",
    getCategoryForUser:"/admin/getCategories",
    addProductList:"/admin/createProductDetails",
    getProductList:"/admin/getProductList",
    getProductDetails:"/admin/getProduct",
    getUserList:"/admin/getUserList",
    getUserDetails:"/admin/getUserList",
    userRemove:"/admin/deleteUser",

    //both
    getOrderList:{
        User:"/user/getOrderHistory",
        Admin:"/admin/getUsersOrder"
    },
    getProfileDetails:{
        User:"/user/getOrderHistory",
        Admin:"/admin/getUsersOrder"
    },
}

export default urls