import React from 'react';
import DriverInfoCard from '../../UI/DriverInfoCard/DriverInfoCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: 4
	}
}));

const DriverInfoPanel = (props) => {
	const classes = useStyles();

	const driversList = props.drivers.map((driver, index) => {
		return (
			<Grid item xs={6} sm={4} lg={3} key={index + 1} >
				<DriverInfoCard driver={driver} index={index + 1} />
			</Grid>
		);
	});

	return (
		<>
			<div className={classes.root}>
				<Grid container spacing={1}>
					{driversList}
				</Grid>
			</div>
		</>
	);
};

const mapStateToProps = (state, ownProps) => {
	return ({
		drivers: state.driver.drivers,
	});
};

export default connect(mapStateToProps)(DriverInfoPanel);
