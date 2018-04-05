import { combineReducers } from 'redux';
import serialReducer from './serialsReducer';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
    serialReducer, nameReducer
});
export default rootReducer;
