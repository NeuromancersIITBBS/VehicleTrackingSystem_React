import driverReducer from './driverReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    driver: driverReducer,
});

export default rootReducer;