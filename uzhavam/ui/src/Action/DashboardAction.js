import DashboardApi from "../Api/DashboardApi"

export function addProduct(data){
    return function(dispatch){
        DashboardApi.addProductApi(data)
        .then((res)=>{
            console.log(res)
            dispatch({type:"ADD_PRODUCT_SUCCESS",payload:res})
            dispatch(getProductlist())
            return res
        })
    } 
}
export function getProductlist(){
    return function(dispatch){
        DashboardApi.getProductlistApi()
        .then((res)=>{
            console.log(res)
            dispatch({type:"GET_PRODUCT_LIST",payload:res})
        })
    } 
}