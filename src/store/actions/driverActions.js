export const initDriversList = (drivers) => {
	return {type: 'INIT_DRIVERS', drivers};
};

export const updateDriverInfo = (driver) => {
	return {type: 'UPDATE_DRIVER', driver};
}; 

export const removeDriver = (phoneNumber) => {
	return {type: 'REMOVE_DRIVER', phoneNumber};
}; 

export const updateDriverLocation = (driver) => {
	return {type: 'UPDATE_DRIVER_LOCATION', driver};
}; 

export const updateDriverToken = (token) => {
	return {type: 'UPDATE_DRIVER_TOKEN', token};
};

export const deleteDriverToken = () => {
	return {type: 'DELETE_DRIVER_TOKEN'};
};