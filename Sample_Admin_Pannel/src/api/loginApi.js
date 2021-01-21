import axios from "./apiConfig"
import qs from "qs";

class LoginApi{
    static signUp(data){
        return axios.post("/signUp",data)
    }
    static login(data){
        return axios.post("http://localhost:8080/admin/login",data)
    }
}

export default LoginApi;