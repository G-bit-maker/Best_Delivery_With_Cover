
export default function dasboardReducer(state,action){
    switch (action.type){
        case "CREATE_CLIENT_DETAIL_SUCCESS":
            if(action.payload.failure){
                return{
                    ...state,
                    addClientFailure:action.payload.failure
                }
            }else{
                return {...state}
            }

        case "GET_CLIENT_DETAILS":
                return{
                    ...state,
                    clientList:action.payload
                }

        default:
            return {...state}
    }
}