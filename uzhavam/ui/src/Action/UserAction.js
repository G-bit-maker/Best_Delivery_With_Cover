import UserApi from "../Api/UserApi"

export function getCategory(){
    return function(dispatch){
        UserApi.getCategoryApi()
        .then((res)=>{
            dispatch({type:"GET_USER_CATEGORY",payload:res})
            return res
        })
    } 
}

export function getProductList(id){
    return function(dispatch){
        UserApi.getProductListApi()
        .then((res)=>{
            dispatch({type:"GET_USER_PRODUCT_LIST",payload:res})
            return res
        })
    } 
}