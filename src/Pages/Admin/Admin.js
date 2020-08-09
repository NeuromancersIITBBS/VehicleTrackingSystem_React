import React from 'react';
import RequestedDrivers from '../../Components/RequestedDrivers/RequestedDrivers';
import RegisteredDrivers from '../../Components/RegisteredDrivers/RegisteredDrivers';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 3,
	},
	text: {
		marginTop: 10
	}
}));


const Admin = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container justify="center" >
				<Grid item container xs={12} justify="center" className={classes.text}>
					<Typography color="secondary" variant="h4" align="center">Admin Page</Typography>
				</Grid>
				<Divider />
				<Grid item xs={12} className={classes.text}>
					<Typography color="primary" variant="h6" align="center">Pending Driver Requests</Typography>
				</Grid>
				<Grid item xs={12} >
					<RequestedDrivers />
				</Grid>
				<Divider />
				<Grid item xs={12} className={classes.text}>
					<Typography color="primary" variant="h6" align="center">Existing Drivers</Typography>
				</Grid>
				<Grid item xs={12} >
					<RegisteredDrivers />
				</Grid>
			</Grid>
		</>
	);
};

export default Admin;