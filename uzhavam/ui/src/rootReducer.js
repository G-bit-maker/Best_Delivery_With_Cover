import { combineReducers } from "redux";
import loginReducer from './Reducer/loginReducer'
import dashboardReducer from './Reducer/DashboardReducer'

const rrducer = combineReducers({
    loginReducer,
    dashboardReducer
})

export default rrducer