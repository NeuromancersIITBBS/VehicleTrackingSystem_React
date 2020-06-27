import { setStorage, readStorage, removeStorage } from '../../utils/LocalStorageUtil';
import { USER_TOKEN_DURATION } from '../../Data/Constants';
import { store } from '../store';
import { unbookResponse } from '../actions/userActions';
import { makeUnbookReq } from '../../utils/SocketUtils'; 

const initState = {
	users: [],
	userInfo: readStorage('userInfo'),
	userTimer: null
};

const userReducer = (state = initState, action) => {
	switch(action.type){
	case 'INIT_USERS': {
		if(!action.users) action.users = [];
		return {...state, users: action.users};
	}
	case 'ADD_USER': {
		if(state.users.findIndex(user => user.id === action.user.id) !== -1){
			return state;
		}
		return {...state, users: [...state.users, action.user]};
	}
	case 'REMOVE_USER': {
		const rmUsersList = state.users.filter(user => user.id !== action.userID);
		return {...state, users: rmUsersList};
	}
	case 'BOOK_RESPONSE': {
		setStorage('userInfo', action.userInfo, USER_TOKEN_DURATION);
		const timerRef = setTimeout(() => {
			makeUnbookReq(action.userInfo);
			store.dispatch(unbookResponse(action.userInfo));
		}, USER_TOKEN_DURATION*1000);
		return {...state, userInfo: action.userInfo, userTimer: timerRef};
	}
	case 'UNBOOK_RESPONSE': {
		if(state.userInfo.id !== action.userID) return state;
		removeStorage('userInfo');
		window.clearTimeout(state.userTimer);
		return {...state, userInfo: null, userTimer: null};
	}
	default: 
		return state;
	}
};

export default userReducer;