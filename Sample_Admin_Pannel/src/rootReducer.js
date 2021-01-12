import { combineReducers } from "redux";
import loginReducer from './reducer/loginReducer'
import dashboardReducer from './reducer/dashboardReducer'

const rrducer = combineReducers({
    loginReducer,dashboardReducer
})

export default rrducer