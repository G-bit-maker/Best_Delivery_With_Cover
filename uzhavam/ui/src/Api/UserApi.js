import axios from "./api"
import qs from "qs";
import urls from "./urls"

class UserApi{
    static getCategoryApi(data){
        return axios.get(urls.getCategoryForUser)
    }   
    static getProductListApi(data){
        return axios.get(urls.getProductForUser)
    }   
}

export default UserApi;