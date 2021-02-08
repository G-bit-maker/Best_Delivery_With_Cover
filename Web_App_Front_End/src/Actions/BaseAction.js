import axios from "axios"


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
        axios.post("http://localhost:5000/admin/login", inputData)
        .then(responce=>{
            let res = responce.data;
            if(res.err){
                dispatch({
                    type: "LOGIN_FAILUR",
                    err: res.err,
                })
            }else{
                localStorage.setItem("auth", JSON.stringify(res.userToken));
                localStorage.setItem("name", res.name);
                localStorage.setItem("email", res.email);
                localStorage.setItem("userType", res.userType);
                dispatch({
                    type: "LOGIN_SUCCESS",
                })
            }
        })
        .catch(err => {
            alert("Somthing Went Wrong With loginAction")
        })
    }
     
}