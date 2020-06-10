const initState = {
    users: []
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
            
        default: 
            return state;
    }
};

export default userReducer;