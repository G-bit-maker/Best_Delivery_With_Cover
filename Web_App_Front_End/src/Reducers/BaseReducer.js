import {} from "react-redux";

const BaseReducer = (state, actions) =>{
    switch(actions.type){

        case "REGISTER_FAILUR":{
            return {
                ...state,
                redirect: false,
                err: actions.err
            }
        }

        case "REGISTER_SUCCESS":{
            return {
                ...state,
                redirectToLogin : true,
                data: actions.data,
                success: actions.payload
            }
        }

        case "LOGIN_FAILUR":{
            return {
                ...state,
                err: actions.failure
            }
        }

        case "LOGIN_REQUEST":{
            return {
                ...state,
                pageLoading: actions.payload
            }
        }

        case "LOGIN_SUCCESS":{
            return {
                ...state,
                redirectToHome: true,
            }
        }

        case "SAVE_CATEGORIE_REQUEST": {
            return{
                ...state,
                buttonLoading: true
            }
        }

        case "SAVE_CATEGORIE_FAILURE": {
            return{
                ...state,
                buttonLoading: false
            }
        }

        case "SAVE_CATEGORIE_SUCCESS": {
            if(actions.payload.failure){
                return{
                    ...state,
                    buttonLoading: false,
                    failureObj: actions.payload.failure,
                    toster: true,
                    error: true
                }
            }else if(actions.payload.success){
                return{
                    ...state,
                    buttonLoading: false,
                    successObj: actions.payload.success,
                    clearStatus: true,
                    toster: true,
                    error: false
                }
            }
        }

        case "CLEAT_REQUEST": {
            return{
                ...state,
                successObj: "",
                failureObj: "",
                toster: false,
                error: false
            }
        }

        case "GET_CATEGORIE_SUCCESS":{
            if(actions.payload.failure){
                return{
                    ...state,
                    pageLoading: false,
                    listData: "",
                    failure: actions.payload.failure.message,
                    clearStatus: false
                }
            }else{
                return{
                    ...state,
                    pageLoading: false,
                    listData: actions.payload.success.list,
                    clearStatus: false
                }
            }
        }

        case "GET_CATEGORIE_FAILURE":{
            return{
                ...state,
                pageLoading: false,
                listData: "",
                failure: actions.payload.message,
                clearStatus: false
            }
        }

        default:
            return state;
    }
}

export default BaseReducer;