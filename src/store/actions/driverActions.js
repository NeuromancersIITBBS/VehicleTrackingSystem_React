export const initDriversList = (drivers) => {
    return {type: 'INIT_DRIVERS', drivers};
};

export const addDriver = (driver) => {
    return {type: 'ADD_DRIVER', driver};
}; 

export const removeDriver = (phoneNumber) => {
    return {type: 'REMOVE_DRIVER', phoneNumber};
}; 

export const updateDriver = (driver) => {
    return {type: 'UPDATE_DRIVER', driver};
}; 