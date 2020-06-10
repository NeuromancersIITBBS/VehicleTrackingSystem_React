import React, {useState} from 'react';
import BookPanel from '../../UI/BookPanel/BookPanel';
import DriverInfoPanel from '../DriverInfoPanel/DriverInfoPanel';
import BookModal from '../BookModal/BookModal';
import { makeUnbookReq } from '../../utils/SocketUtils';
import { connect } from 'react-redux';

const UserPanel = (props) => {
	const [dialogState, setDialogState] = useState(false);
	const closeDialog = () => {setDialogState(false)};
	const openDialog = () => {setDialogState(true)};
	const unbookHandler = () => {makeUnbookReq(props.userInfo)};
	
	return (
		<>
			<BookModal dialogState={dialogState} closeDialog={closeDialog}/>
			<BookPanel 
				openDialog={openDialog} 
				bookID={props.userInfo ? props.userInfo.id:null} 
				unbookHandler={unbookHandler}
				gotInHandler={unbookHandler}/>
			<DriverInfoPanel />
		</>
	);
};

const mapStateToProps = (state) => {
	return ({
		userInfo: state.user.userInfo
	});
};

export default connect(mapStateToProps)(UserPanel);
