import io from 'socket.io-client';
import { store } from '../Store/store';
import { initDriversList, updateDriverInfo, updateDriverLocation, removeDriver } from '../Store/actions/driverActions';
import { initUsersList, addUser, removeUser } from '../Store/actions/userActions';

const socket = io('https://vts189.herokuapp.com');

// Socket-Redux mess goes here : )
export const initSocketListeners = () => {
    socket.emit('onConnection');

    socket.on('connectionResponse', (res) => {
        store.dispatch(initUsersList(res.userList));
        store.dispatch(initDriversList(res.driverList));
    });

    // socket.on('bookResponse', (user) => {
    //     bookDiv.hide();
    //     unbookDiv.show();
    //     userIdDiv.text(user.id);
    //     userDriverList.userList.push(user);
    //     userListDiv.text(JSON.stringify(userDriverList.userList));
    // });   

    // socket.on('unbookResponse', (userID) => {
    //     bookDiv.show();
    //     unbookDiv.hide();
    //     userIdDiv.text('');
    //     const index = userDriverList.userList.findIndex(user => user.id === userID);
    //     userDriverList.userList.splice(index, 1);
    //     userListDiv.text(JSON.stringify(userDriverList.userList));
    // });

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
};