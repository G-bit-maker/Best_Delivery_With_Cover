
export default function profileReducer(state,action){
    console.log(action.type)
    switch (action.type){
        case "GET_PRODUCT_LIST":
            console.log(action.payload)
            return {
                ...state,
                productList:action.payload
            }
        case "ADD_PRODUCT_SUCCESS":
            console.log(action.payload)
            return {
                ...state,
                userList:action.payload
            }

        default:
            return {...state}
    }
}