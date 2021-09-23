import { combineReducers } from "redux"
import Login from "./auth/reducers"
import Dashboard from "./dashboard/reducers"
import Loading from "./loading/reducers"
import Home from "./home/reducers"
import Messages from "./message/reducers"
import Notifications from "./notifications/reducers"
import DetailView from "./detail-views/reducers"
import Stats from "./stats/reducers"
import FindPeople from "./find/reducers"

const rootReducer = combineReducers({
    Login,
    Home,
    Messages,
    Dashboard,
    Loading,
    Notifications,
    DetailView,
    Stats,
    FindPeople
})
  
export default rootReducer