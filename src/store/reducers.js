import { combineReducers } from "redux"
import Login from "./auth/reducers"
import Dashboard from "./dashboard/reducers"
import Loading from "./loading/reducers"
import Home from "./home/reducers"
import Messages from "./message/reducers"
import Notifications from "./notifications/reducers"

const rootReducer = combineReducers({
    Login,
    Home,
    Messages,
    Dashboard,
    Loading,
    Notifications
})
  
export default rootReducer