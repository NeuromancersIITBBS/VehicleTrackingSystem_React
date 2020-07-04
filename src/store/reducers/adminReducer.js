const initState = {
    registeredDrivers: [],
    requestedDrivers: []
};

const adminReducer = (state = initState, action) => {
    switch(action.type){
        case 'INIT_REGISTERED_DRIVERS':
            return{...state, registeredDrivers: action.driversList}

        case 'INIT_REQUESTED_DRIVERS':
            return{...state, requestedDrivers: action.requestedDrivers}

        case 'DELETE_DRIVER': 
            const registeredDriversNew = state.registeredDrivers.filter(driver => driver.phoneNumber !== action.phoneNumber);
            console.log(registeredDriversNew);
            return {...state, registeredDrivers: registeredDriversNew};
        
        case 'REJECT_DRIVER' :
            const requestedDriversNew = state.registeredDrivers.filter(driver => driver.phoneNumber !== action.phoneNumber);
            return {...state, requestedDrivers: requestedDriversNew};
        
        case 'VERIFY_DRIVER' :
            const newRegisteredDrivers = state.registeredDrivers.filter(driver => driver.phoneNumber !== action.driverPhoneNumber);
            return {...state, registeredDrivers: newRegisteredDrivers};

        default: 
            return state;
    }

};

export default adminReducer;