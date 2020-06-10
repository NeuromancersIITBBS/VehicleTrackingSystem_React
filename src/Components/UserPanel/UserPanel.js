import React, {useState} from 'react';
import BookPanel from '../../UI/BookPanel/BookPanel';
import DriverInfoPanel from '../DriverInfoPanel/DriverInfoPanel';
import BookModal from '../BookModal/BookModal';

const UserPanel = () => {
	const [dialogState, setDialogState] = useState(false);
	const closeDialog = () => {setDialogState(false)};
	const openDialog = () => {setDialogState(true)};

	return (
		<>
			<BookModal dialogState={dialogState} closeDialog={closeDialog}/>
			<BookPanel openDialog={openDialog} />
			<DriverInfoPanel />
		</>
	);
};

export default UserPanel;
