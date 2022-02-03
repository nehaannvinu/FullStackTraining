import { combineReducers } from "redux";
import users from "./users";

const rootReducer = combineReducers({
    Users: users
})

export default rootReducer;