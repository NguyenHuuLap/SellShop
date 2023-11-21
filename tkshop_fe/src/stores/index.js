import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reduxApp from '../reducers'
import rootReducer from '../reducers/rootReducer.js';

const store = createStore(rootReducer);
export default store;
