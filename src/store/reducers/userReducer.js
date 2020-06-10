import { setStorage, readStorage, removeStorage } from '../../utils/LocalStorageUtil';

const initState = {
    users: [],
    userInfo: readStorage('userInfo')
};

const userReducer = (state = initState, action) => {
    switch(action.type){
        case 'INIT_USERS':
            if(!action.users) action.users = [];
            return {...state, users: action.users};
            
        case 'ADD_USER': 
            if(state.users.findIndex(user => user.id === action.user.id) !== -1){
                return state;
            }
            return {...state, users: [...state.users, action.user]};
            
        case 'REMOVE_USER': 
            const rmUsersList = state.users.filter(user => user.id !== action.userID);
            return {...state, users: rmUsersList};

        case 'BOOK_RESPONSE':
            setStorage('userInfo', action.userInfo);
            return {...state, userInfo: action.userInfo}
        
        case 'UNBOOK_RESPONSE':
            removeStorage('userInfo');
            if(state.userInfo.id !== action.userID) return state;
            return {...state, userInfo: null}

        default: 
            return state;
    }
};

export default userReducer;