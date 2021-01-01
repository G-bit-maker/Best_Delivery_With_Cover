import api from "../apiconfig"

const Api = api.apihint;

export default class setting{
    static value = Api + {
        userAuth:{
            register:"/api/register",
            login:"/api/login"
        }
    }
}