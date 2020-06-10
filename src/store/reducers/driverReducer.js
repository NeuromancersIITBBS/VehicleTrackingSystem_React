const initState = {
    drivers: []
};

const driverReducer = (state = initState, action) => {
    switch(action.type){
        case 'INIT_DRIVERS':
            if(!action.drivers) action.drivers = [];
            return {...state, drivers: action.drivers};

        case 'UPDATE_DRIVER': 
            const driverIndex = state.drivers.findIndex(driver => driver.phoneNumber === action.driver.phoneNumber);
            if(driverIndex === -1){
                return {drivers: [...state.drivers, action.driver]};
            }
            const newDriver = action.driver;
            const newDriversList = state.drivers.map((driver) => {
                return driver.phoneNumber === newDriver.phoneNumber ? {...driver, ...newDriver} : driver;                 
            });
            return {...state, drivers: newDriversList};
        
        case 'UPDATE_DRIVER_LOCATION': 
            const newDriverData = action.driver;
            const updatedDriversList = state.drivers.map((driver) => {
                return driver.phoneNumber === newDriverData.phoneNumber ? {...driver, ...newDriverData} : driver;                 
            });
            return {...state, drivers: updatedDriversList};

        case 'REMOVE_DRIVER': 
            const rmDriversList = state.drivers.filter(driver => driver.phoneNumber !== action.phoneNumber);
            return {...state, drivers: rmDriversList};

        default: 
            return state;
    }
};

export default driverReducer;