import axios from "./api"
import qs from "qs";

class LoginApi{
    static signUp(data){
        return axios.post("/user/signUp",data)
    }
    static login(data){
        return axios.post("/user/signin",data)
    }
}

export default LoginApi;