import React, { useState } from 'react';
import BookPanel from '../../UI/BookPanel/BookPanel';
import DriverInfoPanel from '../DriverInfoPanel/DriverInfoPanel';
import BookModal from '../BookModal/BookModal';
import { makeUnbookReq } from '../../utils/SocketUtils';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	bookPanel: {
		order: 0,
		[theme.breakpoints.up('md')]: {
			order: 2
		},
	}
}));

const UserPanel = (props) => {
	const classes = useStyles();
	const [dialogState, setDialogState] = useState(false);
	const closeDialog = () => { setDialogState(false) };
	const openDialog = () => { setDialogState(true) };
	const unbookHandler = () => { makeUnbookReq(props.userInfo) };
	return (
		<>
			<BookModal dialogState={dialogState} closeDialog={closeDialog} />
			<Grid container justify="center" className={classes.root} alignItems="stretch">
				<Grid item xs={12} className={classes.bookPanel}>
					<BookPanel
						openDialog={openDialog}
						bookID={props.userInfo ? props.userInfo.id : null}
						unbookHandler={unbookHandler}
						gotInHandler={unbookHandler} />
				</Grid>
				<Grid item xs={12}>
					<DriverInfoPanel />
				</Grid>
			</Grid>
		</>
	);
};

const mapStateToProps = (state) => {
	return ({
		userInfo: state.user.userInfo
	});
};

export default connect(mapStateToProps)(UserPanel);
