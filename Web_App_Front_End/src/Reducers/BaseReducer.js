import {} from "react-redux";

const BaseReducer = (state, actions) =>{
    switch(actions.type){

        case "REGISTER_FAILUR":{
            return {
                redirect: false,
                err: actions.err
            }
        }

        case "REGISTER_SUCCESS":{
            return {
                redirectToLogin : true,
                data: actions.data,
                success: actions.payload
            }
        }

        case "LOGIN_FAILUR":{
            return {
                err: actions.err
            }
        }

        case "LOGIN_REQUEST":{
            return {
                pageLoading: actions.payload
            }
        }

        case "LOGIN_SUCCESS":{
            return {
                redirectToHome: true,
            }
        }

        default:
            return state;
    }
}

export default BaseReducer;