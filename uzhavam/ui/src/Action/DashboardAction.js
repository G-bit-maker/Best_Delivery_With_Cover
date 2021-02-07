import DashboardApi from "../Api/DashboardApi"

export function SaveCategory(data){
    return function(dispatch){
        DashboardApi.SaveCategoryApi(data)
        .then((res)=>{
            console.log(res)
            dispatch({type:"ADD_CATEGORY",payload:res})
            return res
        })
    } 
}
export function getCategory(){
    return function(dispatch){
        DashboardApi.getCategoryApi()
        .then((res)=>{
            console.log(res)
            dispatch({type:"GET_CATEGORY",payload:res})
            return res
        })
    } 
}
export function addProductDetails(data){
    return function(dispatch){
        DashboardApi.addProductApi(data)
        .then((res)=>{
            console.log(res)
            dispatch({type:"ADD_PRODUCT_SUCCESS",payload:res})
            return res
        })
    } 
}
export function getProductList(){
    return function(dispatch){
        DashboardApi.getProductlistApi()
        .then((res)=>{
            console.log(res)
            dispatch({type:"GET_PRODUCT_LIST",payload:res})
        })
    } 
}