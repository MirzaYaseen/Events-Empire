import {createStore} from 'redux';
import Reducers from '../reducers/Reducers';
import Reducers2 from '../reducers/Reducers2';
import { combineReducers } from 'redux';
const routeReducer = combineReducers({Reducers, Reducers2});
const store = createStore (routeReducer);
export default store;
