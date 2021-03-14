import axios from "./api"
import qs from "qs";
import urls from "./urls"

class UserApi{
    static getCartDetailsApi(){
        return axios.get(urls.getCartDetails)
    }   
    static getCategoryApi(data){
        return axios.get(urls.getCategoryForUser)
    }   
    static getProductListApi(id){
        return axios.get(urls.getProductForUser,{params:{id:id}})
    }   
    static cartUpdateApi(id,i){
        return axios.post(urls.updateCart ,qs.stringify({
            productId:id,count:i
        }) )
    }   
    static addressSaveApi(data){
        return axios.post(urls.addressSave ,qs.stringify(
            data.dataOnChange
        ) )
    }   
}

export default UserApi;