import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
const routReducer=combineReducers({
    AuthReducer:AuthReducer,
    UserReducer:UserReducer
})

export default routReducer;