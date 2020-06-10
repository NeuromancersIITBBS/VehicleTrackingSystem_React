export const initUsersList = (users) => {
    return {type: 'INIT_USERS', users};
};

export const addUser = (user) => {
    return {type: 'ADD_USER', user};
}; 

export const removeUser = (userID) => {
    return {type: 'REMOVE_USER', userID};
};