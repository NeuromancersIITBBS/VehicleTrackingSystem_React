import React from 'react';
import { connect } from 'react-redux';
import DriverInfoCard from '../../UI/DriverInfoCard/DriverInfoCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: 4,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	}, NoActiveDriversCard: {
		height: '30vh',
	}
}));

const DriverInfoPanel = (props) => {
	const classes = useStyles();
	const driversList = props.drivers.map((driver, index) => {
		return (
			<Grid item xs={10} lg={6} key={index + 1} >
				<DriverInfoCard driver={driver} index={index + 1} />
			</Grid>
		);
	});

	const noActiveDriversCard = (
		<Card variant="outlined">
			<CardContent>
				<Typography color="secondary" variant="h6" align="center">
					No drivers are active at the moment, try again later!
				</Typography>
			</CardContent>
		</Card>);
	return (
		<div className={classes.root}>
			<Grid container spacing={1} justify="center">
				{driversList.length ? driversList : noActiveDriversCard}
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
