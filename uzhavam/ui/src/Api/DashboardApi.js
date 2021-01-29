import axios from "./api"
import qs from "qs";

class ProfileApi{
    static addProductApi(data){
        return axios.post("/admin/createProductDetails",data)
    }
    static getProductlistApi(){
        return axios.get("/admin/getProductList")
    }
}

export default ProfileApi;