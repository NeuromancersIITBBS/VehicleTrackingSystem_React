export const initUsersList = (users) => {
	return {type: 'INIT_USERS', users}
}

export const addUser = (user) => {
	return {type: 'ADD_USER', user}
} 

export const removeUser = (userID) => {
	return {type: 'REMOVE_USER', userID}
}

export const bookResponse = (user) => {
	return {type: 'BOOK_RESPONSE', userInfo: user}
}

export const unbookResponse = (user) => {
	return {type: 'UNBOOK_RESPONSE', userID: user.id}
}