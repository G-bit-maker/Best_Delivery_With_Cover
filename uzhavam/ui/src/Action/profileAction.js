import ProfileApi from "../Api/profileApi"

export function getUserDetails(data){
    return function(dispatch){
        ProfileApi.getUserDetails(data)
        .then((res)=>{
            console.log(res)
            dispatch({type:"GET_USER_DETAILS",payload:res})
        })
    } 
}
export function getUserList(data){
    return function(dispatch){
        ProfileApi.getUserList(data)
        .then((res)=>{
            console.log(res)
            dispatch({type:"GET_USER_LIST",payload:res})
        })
    } 
}