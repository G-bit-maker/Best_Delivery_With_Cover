
export default function userReducer(state,action){
    switch (action.type){
        case "GET_USER_CATEGORY":
            return {
                ...state,
                categoryList:action.payload.list ? action.payload.list : []
            }
        case "GET_USER_PRODUCT_LIST":
            return {
                ...state,
                proudctList:action.payload.list ? action.payload.list : []
            }

        default:
            return {...state}
    }
}