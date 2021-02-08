import LoginApi from "../Api/loginApi"

export function login(data){
    return function(dispatch){
        LoginApi.login(data)
        .then((res)=>{
            console.log(res)
            if(res.success){
                window.location ="/Dashboard"
            }
            dispatch({type:"LOGIN",payload:res})
        })
    } 
}

export function signUp(data){
    return function(dispatch){
        LoginApi.signUp(data)
        .then((res)=>{
            console.log(res)
            dispatch({type:"SIGN_UP_SUCCESS",payload:res})
        })
    } 
}