export const initRegisteredDrivers = (driversList) =>{
    return {type: 'INIT_REGISTERED_DRIVERS', driversList}
}
export const initRequestedDrivers = (requestedDrivers) =>{
    return {type: 'INIT_REQUESTED_DRIVERS', requestedDrivers}
}
export const deleteDriver = (phoneNumber) => {
    return {type: 'DELETE_DRIVER', phoneNumber};
};

export const rejectDriver = (phoneNumber) => {
    return {type: 'REJECT_DRIVER', phoneNumber};
}; 

export const removeDriver = (phoneNumber) => {
    return {type: 'REMOVE_DRIVER', phoneNumber};
}; 

export const verifyDriver = (driver) => {
    return {type: 'VERIFY_DRIVER', driver}
}
