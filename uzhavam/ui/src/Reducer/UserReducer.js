
export default function userReducer(state,action){
    switch (action.type){
        case "SELECT_ADDRESS":
            return {
                ...state,
                addressList:action.addressList,
                at:Math.random()
            }
        case "GET_USER_CATEGORY":
            return {
                ...state,
                categoryList:action.payload && action.payload.list ? action.payload.list : []
            }
        case "GET_CART_DETAILS":
            return {
                ...state,
                cartProductList:action.payload && action.payload.list ? action.payload.list : [],
                at:Math.random()
            }
        case "GET_ADDRESS_LIST":
            return {
                ...state,
                addressList:action.payload && action.payload.list ? action.payload.list : []
            }
        case "GET_ORDER_LIST":
            return {
                ...state,
                orderList:action.payload && action.payload.orders ? action.payload.orders : []
            }
        case "GET_ORDER_DETAILS":
            return {
                ...state,
                orderDetails:action.payload && action.payload.orders ? action.payload.orders[0] : ""
            }
        case "GET_PROFILE_DETAIL":
            return {
                ...state,
                profileDetails:action.payload && action.payload.profile ? action.payload.profile : ""
            }
        case "PRODUCT_COUNT_UPDATE":
            let proudctList = state.proudctList
            proudctList.find(x=>x._id === action.id ? x.count = action.count || 0 : "")
            return {
                ...state,
                proudctList:proudctList || [],
                at:Math.random()
            }
        case "CHANGE_ORDER_STATUS":
            let orderList = state.orderList
            orderList.find(x=>x._id.orderId === action.payload.orderId ? x._id.orderStatus = action.payload.status : "")
            return {
                ...state,
                orderList:orderList || [],
                at:Math.random()
            }
        case "GET_USER_PRODUCT_LIST":
            return {
                ...state,
                proudctList:action.payload ? action.payload : [],
                cartList:action.cartList ? action.cartList : [],
                at:Math.random()
            }
        case "ON_PRODUCT_SEARCH":
            let proudctListarr = state.proudctList || []
            proudctListarr.map(data=>{
                if(data.productName.toLowerCase().indexOf(action.data.toLowerCase()) == -1){
                    data.hiddenStatus = true
                }else{
                    data.hiddenStatus = false
                }
            })
            return {
                ...state,
                proudctList:proudctListarr,
                at:Math.random()
            }
        /* case "UPDATE_USER_CART":
            let cartList = state.cartList || []
            let i=cartList.findIndex(data=>data.productId===action.id)
            if(action.c === 0){
                cartList.splice(i,1)
            }else if(i === -1){
                cartList.push({
                    productId:action.id,
                    count:action.c
                })
            }else{
                cartList[i]={
                    productId:action.id,
                    count:action.c
                }
            }
            return {
                ...state,
                cartList:cartList,
                at:Math.random()
            } */

        default:
            return {...state}
    }
}