import React from 'react';
import Map from '../../Components/Map/Map2';
import DriverLogin from '../../Components/DriverLogin/DriverLogin';
import DriverPanel from '../../Components/DriverPanel/DriverPanel';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	mapDiv: {
		height: '50vh',
		[theme.breakpoints.up('md')]: {
			height: '90vh'
		},
	}
}));

const Driver = (props) => {
	const classes = useStyles();
	return (
		<>
			<DriverLogin />
			<Grid container justify="center" className={classes.root} alignItems="stretch">
				<Grid item xs={12} md={6} className={classes.mapDiv}>
					<Map />
				</Grid>
				<Grid item xs={12} md={6}>
					<DriverPanel />
				</Grid>
			</Grid>
		</>
	);
}

export default Driver;
