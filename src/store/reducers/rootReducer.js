import driverReducer from './driverReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    driver: driverReducer,
    user: userReducer,
});

export default rootReducer;