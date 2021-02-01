
import axios from "axios";

const api = axios.create()
api.interceptors.response.use(
    function(res){
        return res.data
    }
)
export default api 