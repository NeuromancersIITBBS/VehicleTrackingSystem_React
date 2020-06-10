import React, {useState} from 'react';
import BookPanel from '../../UI/BookPanel/BookPanel';
import DriverInfoPanel from '../../UI/DriverInfoPanel/DriverInfoPanel';
import BookModal from '../BookModal/BookModal';

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

	const [dialogState, setDialogState] = useState(false);
	const closeDialog = () => {setDialogState(false)};
	const openDialog = () => {setDialogState(true)};

	return (
		<>
			<BookModal dialogState={dialogState} closeDialog={closeDialog}/>
			<BookPanel openDialog={openDialog} />
			<DriverInfoPanel drivers={drivers} />
		</>
	);
};

export default UserPanel;
