import { combineReducers } from "redux";
import users from "./albumReducer";

const rootReducer = combineReducers({
    users: users
})

export default rootReducer;