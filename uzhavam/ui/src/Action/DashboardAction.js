import DashboardApi from "../Api/DashboardApi"

export function AddCategory(data,flag){
    return function(dispatch){
        DashboardApi.SaveCategoryApi(data,flag)
        .then((res)=>{
            dispatch({type:"ADD_REMOVE_CATEGORY",payload:res,flag})
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
            if(res.success){
                window.location = "/ViewProduct"
            }
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
export function getUserList(){
    return function(dispatch){
        DashboardApi.getUserListApi()
        .then((res)=>{
            console.log(res)
            dispatch({type:"GET_USER_LIST",payload:res})
        })
    } 
}
