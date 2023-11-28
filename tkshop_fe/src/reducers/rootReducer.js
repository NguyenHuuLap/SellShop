import { combineReducers } from "redux";
import userReducer from "./UserReducer.js";
import cartReducer from "./CartReducer.js";


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

export default rootReducer;