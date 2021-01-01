import axios from "axios";
import setting from "./setting"

const Settings = setting.value;

class BaseApi {
    static registerActionApi(inputData){
        return axios.post(Settings.userAuth.register, inputData)
    }

    static loginActionApi(inputData){
        alert(Settings.userAuth.login)
        return axios.post(Settings.userAuth.login, inputData)
    }
}

export default BaseApi