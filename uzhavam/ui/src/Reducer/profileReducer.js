
export default function profileReducer(state,action){
    console.log(action.type)
    switch (action.type){
        case "GET_USER_DETAILS":
            console.log(action.payload)
            return {
                ...state,
                userDetails:action.payload
            }
        case "GET_USER_LIST":
            console.log(action.payload)
            return {
                ...state,
                userList:action.payload
            }

        default:
            return {...state}
    }
}