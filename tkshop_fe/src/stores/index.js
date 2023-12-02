<<<<<<< HEAD
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer.js";
=======
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
>>>>>>> dev-khang

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
