import axios from "axios"
import apiCall from "../api/Baseapi"


export const show_name = (val)=>
    ({ type: 'FIRST_TEST_NAME' ,
       value: val
    })

export const show_age = (val)=>
    ({ type: 'FIRST_TEST_AGE' ,
       value: val
    })

export const registerAction = (inputData) => {
       return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        axios.post("http://localhost:5000/api/register", inputData)
        .then(responce=>{
            let res = responce.data;
            if(res.err !== undefined){
                dispatch({
                    type: "REGISTER_FAILUR",
                    err: res.err,
                })
            }else{
                dispatch({
                    type: "REGISTER_SUCCESS",
                    payload: res.success,
                    data: res.data
                })
            }
        })
        .catch(err => {
            alert("Somthing Went Wrong With RefisterAction")
        })
       }
        
}

export const loginAction = (inputData) => {
    return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.loginActionApi(inputData)
        .then(responce=>{
            console.log(responce)
            let res = responce.data;
            if(res.failure){
                dispatch({
                    type: "LOGIN_FAILUR",
                    failure: res.failure,
                })
            }else{
                localStorage.setItem("auth", JSON.stringify(res.token));
                localStorage.setItem("userType", res.userType);
                dispatch({
                    type: "LOGIN_SUCCESS",
                })
                if(res.userType === "Admin"){
                    window.open("/dashboard/0", "_self")
                }else if(res.userType === "Admin"){

                }
            }
        })
        .catch(err => {
            alert("Somthing Went Wrong With loginAction")
        })
    }
     
}

export const GetAllCategories = (userType, methode, processName, inputData) => {
    return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.SaveCategorieActionApi(userType, methode, processName, inputData)
        .then(responce=>{
            dispatch({
                type: "GET_CATEGORIE_SUCCESS",
                payload: responce.data,
            })
        })
        .catch(err => {
            dispatch({
                type: "GET_CATEGORIE_FAILURE",
                payload: true,
            })
            alert("Somthing Went Wrong With loginAction")
        })
    }
     
}

export const SaveCategorieAction = (userType, methode, processName, inputData) => {
    return dispatch =>{
        dispatch({
            type: "SAVE_CATEGORIE_REQUEST",
            payload: true,
        })
        apiCall.SaveCategorieActionApi(userType, methode, processName, inputData)
        .then(responce=>{
            dispatch({
                type: "SAVE_CATEGORIE_SUCCESS",
                payload: responce.data,
            })
            if(responce.data.success){
                dispatch(GetAllCategories(userType, "get", "getAllCategories"))
            }
        })
        .catch(err => {
            dispatch({
                type: "SAVE_CATEGORIE_FAILURE",
                payload: true,
            })
            alert("Somthing Went Wrong With loginAction")
        })
    }
     
}

export const clearMessage = (status) => {
    return dispatch =>{
        dispatch({
            type: "CLEAT_REQUEST",
            payload: status,
        })
    }
}