import LoginApi from "../api/loginApi"

export function loginAction(data){
    return function(dispatch){
        LoginApi.login(data)
        .then((res)=>{
            dispatch({type:"LOGIN", payload:res})
        })
    } 
}
