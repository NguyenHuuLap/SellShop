import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reduxApp from '../reducers'
const store =  createStore(reduxApp,applyMiddleware(thunkMiddleware));
export default store;
