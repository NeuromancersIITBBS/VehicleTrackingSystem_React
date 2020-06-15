import io from 'socket.io-client';
import { store } from '../Store/store';
import { initDriversList, updateDriverInfo, updateDriverLocation, removeDriver, deleteDriverToken } from '../Store/actions/driverActions';
import { initUsersList, addUser, removeUser, bookResponse, unbookResponse } from '../Store/actions/userActions';
import { BASE_URL } from '../Data/Constants';

const socket = io(BASE_URL);

export const initSocketListeners = () => {
	socket.emit('onConnection');

	socket.on('connectionResponse', (res) => {
		store.dispatch(initUsersList(res.userList));
		store.dispatch(initDriversList(res.driverList));
	});

	socket.on('bookResponse', (user) => {
		store.dispatch(addUser(user));
		store.dispatch(bookResponse(user));
	});

	socket.on('unbookResponse', (user) => {
		store.dispatch(removeUser(user.id));
		store.dispatch(unbookResponse(user));
	});

	socket.on('addUser', (user) => {
		store.dispatch(addUser(user));
	});
    
	socket.on('removeUser', (user) => {
		store.dispatch(removeUser(user.id));
	});

	socket.on('addDriver', (driverData) => {
		store.dispatch(updateDriverInfo(driverData));
	});
    
	socket.on('updateDriverData', (driverData) => {
		store.dispatch(updateDriverInfo(driverData));
	});
    
	socket.on('updateDriverLocation', (driverData) => {
		store.dispatch(updateDriverLocation(driverData));
	});

	socket.on('removeDriver', (driverData) => {
		store.dispatch(removeDriver(driverData.phoneNumber));
	});

	socket.on('driverAuthFailed', (data) => {
		// Token is no longer valid!
		store.dispatch(deleteDriverToken());
		alert(data.message || 'Please login again!');
	});
};

export const makeBookReq = (user) => {
	socket.emit('book', user);
};

export const makeUnbookReq = (user) => {
	socket.emit('unbook', user.token);
};

export const registerDriver = (driverData) => {
	socket.emit('registerDriver', driverData);
};

export const emitDriverLocation = (driverData) => {
	console.log('Location Update');
	socket.emit('updateDriverLocation', driverData);
};

export const emitDriverData = (driverData) => {
	socket.emit('updateDriverData', driverData);
};