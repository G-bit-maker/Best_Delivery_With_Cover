import axios from "axios";
import setting from "./setting"
import apihint from "../../src/apiconfig"

class BaseApi {
    static registerActionApi(inputData){
        return axios.post(apihint + setting.userAuth.register, inputData)
    }

    static loginActionApi(inputData){
        return axios.post(apihint + setting.userAuth.login, inputData)
    }
    
    static SaveCategorieActionApi(userType, methode, processName, inputData){
        return axios[methode](apihint + setting[userType][processName], inputData)
    }

    static apiForDelete(userType, methode, processName, inputData){
        return axios[methode](apihint + setting[userType][processName]+"/"+inputData)
    }
}

export default BaseApi