
export default function loginReducer(state,action){
    switch (action.type){
        case "LOGIN":
            console.log("Reducer..")
            return "Login successfully"

        default:
            return {...state}
    }
}