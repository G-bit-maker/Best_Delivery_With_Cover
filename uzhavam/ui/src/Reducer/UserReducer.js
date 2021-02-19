
export default function userReducer(state,action){
    switch (action.type){
        case "GET_USER_CATEGORY":
            return {
                ...state,
                categoryList:action.payload.list ? action.payload.list : []
            }
        case "GET_USER_PRODUCT_LIST":
            return {
                ...state,
                proudctList:action.payload.list ? action.payload.list : []
            }
        case "UPDATE_USER_CART":
            let cartList = state.cartList || []
            let i=cartList.findIndex(data=>data.id===action.id)
            if(i === -1){
                cartList.push({
                    id:action.id,
                    count:action.c
                })
            }else{
                cartList[i]={
                    id:action.id,
                    count:action.c
                }
            }
            return {
                ...state,
                cartList:cartList
            }

        default:
            return {...state}
    }
}