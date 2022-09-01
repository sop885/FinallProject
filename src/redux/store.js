import { createStore, combineReducers, } from 'redux';
import users from './reducers/userReducer'
import requests from './reducers/requestsReducer'

const reducer = combineReducers({users,requests });

const store = createStore(reducer);
window.store = store;
export default store;
