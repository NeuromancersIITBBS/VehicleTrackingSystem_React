import React from 'react';
import { connect } from 'react-redux';
import DriverInfoCard from '../../UI/DriverInfoCard/DriverInfoCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: 4,
		marginTop: theme.spacing(2),
	}
}));

const DriverInfoPanel = (props) => {
	const classes = useStyles();
	console.log(props.users);
	const driversList = props.drivers.map((driver, index) => {
		return (
			<Grid item xs={10} sm={6} md={5} lg={4} key={index + 1} >
				<DriverInfoCard driver={driver} index={index + 1} />
			</Grid>
		);
	});
	return (
		<div className={classes.root}>
			<Grid container spacing={1} justify="center">
				{driversList}
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return ({
		drivers: state.driver.drivers,
		users: state.user.users,
	});
};

export default connect(mapStateToProps)(DriverInfoPanel);
