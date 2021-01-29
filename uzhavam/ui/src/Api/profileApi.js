import axios from "./api"
import qs from "qs";

class ProfileApi{
    static getUserDetails(data){
        return axios.post("/profileDetails",data)
    }
    static getUserList(data){
        return axios.post("/userList",data)
    }
}

export default ProfileApi;