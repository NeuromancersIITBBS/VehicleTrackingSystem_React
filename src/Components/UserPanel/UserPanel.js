import React from 'react';
import BookPanel from '../../UI/BookPanel/BookPanel';
import DriverInfoPanel from '../../UI/DriverInfoPanel/DriverInfoPanel';

const UserPanel = () => {
	const drivers = [{
		phoneNumber: '123456789',
		status: 'active',
		occupiedSeats: 4,
		destination: 'MHR',
		timeStamp: 1591709716004
	}, {
		phoneNumber: '123456789',
		status: 'inactive',
		occupiedSeats: 10,
		destination: 'MBLD',
		timeStamp: Date.now()
	}];
	return (
		<>
			<BookPanel />
			<DriverInfoPanel drivers={drivers} />
		</>
	);
};

export default UserPanel;
