import axios from "./api"
import qs from "qs";
import urls from "./urls"

class UserApi{
    static getCategoryApi(data){
        return axios.get(urls.getCategoryForUser)
    }   
    static getProductListApi(id){
        return axios.get(urls.getProductForUser,{params:{id:id}})
    }   
    static cartUpdateApi(id,i){
        console.log(id,i)
        return axios.get(urls.updateCart/* ,qs.stringify({
            id,count:i
        }) */)
    }   
}

export default UserApi;