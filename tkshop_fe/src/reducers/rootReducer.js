import { combineReducers } from "redux";
import userReducer from "./UserReducer.js";
import cartReducer from "./CartReducer.js";
<<<<<<< HEAD

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
=======
import searchReducer from "./SearchReducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    search: searchReducer
})
>>>>>>> dev-khang

export default rootReducer;
