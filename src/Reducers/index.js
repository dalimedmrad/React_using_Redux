import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer';
import SavedReducer from './SavedReducer';


export default combineReducers({TodoReducer,SavedReducer});