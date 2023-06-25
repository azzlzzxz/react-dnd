import { combineReducers } from 'redux';
import dragOperation from './dragOperation';
import dragOffset from './dragOffset';
const reducers = {
    dragOperation,
    dragOffset
}
export default combineReducers(reducers);
