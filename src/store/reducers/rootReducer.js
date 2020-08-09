import driverReducer from './driverReducer';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	driver: driverReducer,
	user: userReducer,
	admin: adminReducer
});

export default rootReducer;