import axios from "./apiConfig"
import qs from "qs";

class LoginApi{
    static createClientDetailsApi(data){
        return axios.post("/admin/createShopDetails",data)
    }

    static getClientListApi(data){
        return axios.get("/admin/getShopList",{params:data})
    }
    
}

export default LoginApi;