const initState = {
    drivers: []
};

const driverReducer = (state = initState, action) => {
    switch(action.type){
        case 'INIT_DRIVERS':
            if(!action.drivers) action.drivers = [];
            return {...state, drivers: action.drivers};
        case 'ADD_DRIVER': 
            return {drivers: [...state.drivers, action.driver]};
        case 'REMOVE_DRIVER': 
            const newDriversList = state.drivers.filter(driver => driver.phoneNumber !== action.phoneNumber);
            return {...state, drivers: newDriversList};
        case 'UPDATE_DRIVER':
            const newDriver = action.driver;
            const updatedDriversList = state.drivers.map((driver) => {
                return driver.phoneNumber === newDriver.phoneNumber ? {...driver, ...newDriver} : driver;                 
            });
            return {...state, drivers: updatedDriversList};
        default: 
            return state;
    }
};

export default driverReducer;