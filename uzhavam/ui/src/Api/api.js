
import axios from "axios";
import session from "../session";

const api = axios.create()
api.interceptors.response.use(
    function(res){
        return res.data
    }
)
api.interceptors.request.use(
    function(res){
        const AUTH_TOKEN = session.getCookie("TOKEN")
        if(AUTH_TOKEN){
            res.headers["Accept"] = "application/json";
            res.headers["Content-Type"] = "application/x-www-form-urlencoded";
            res.headers["Authorization"] = "Bearer " + AUTH_TOKEN;
        }
        return res
    }
)
export default api 