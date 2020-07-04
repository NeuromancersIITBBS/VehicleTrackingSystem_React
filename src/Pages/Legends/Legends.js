import React from 'react';
import LegendsImgLight from '../../Data/Legends/LegendsLightMode.jpg';
import LegendsImgDark from '../../Data/Legends/LegendsDarkMode.jpg';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ActiveDriverMarker from '../../Data/DriverMarkers/ActiveDefault.svg';
import InactiveDriverMarker from '../../Data/DriverMarkers/Inactive.svg';
import AcadComplexDriverMarker from '../../Data/DriverMarkers/AcadComplex.svg';
import MHRDriverMarker from '../../Data/DriverMarkers/MHR.svg';
import SHRDriverMarker from '../../Data/DriverMarkers/SHR.svg';
import AcadComplexUserMarker from '../../Data/UserMarkers/AcadComplex.svg';
import MHRUserMarker from '../../Data/UserMarkers/MHR.svg';
import SHRUserMarker from '../../Data/UserMarkers/SHR.svg';

const useStyles = makeStyles({
	legendsImg: {
		width: '100%',
	}, 
	imgIcon: {
		margin: 'auto 3vw',
		height: '5vh',
	},
	iconSection:{
		width: '100%',
		margin: '1vh 0',
	},
	iconText: {
		style: 'inline',
		margin: 'auto 0',
		width: '80%'
	}
});

const Legends = () => {
	const theme = useTheme();
	const classes = useStyles();
	const legImg = (theme.palette.type === 'dark') ? LegendsImgDark : LegendsImgLight;
	return (
		<Grid container justify="center" alignItems="center">
			<Grid item xs={12} md={6} className={classes.mapDiv}>
				<Typography variant="h5" align="center">Classification</Typography>
				<img src={legImg} alt="Legends" className={classes.legendsImg} />
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="h6" align="center">Driver Markers</Typography>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={ActiveDriverMarker} alt="Active Driver Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						Active Driver (Unknown destination)
					</Typography>
				</Grid>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={InactiveDriverMarker} alt="Active Driver Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						Inactive Driver
					</Typography>
				</Grid>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={MHRDriverMarker} alt="Active Driver Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						Driver with Destination in MHR-side
					</Typography>
				</Grid>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={SHRDriverMarker} alt="Active Driver Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						Driver with Destination in SHR-side
					</Typography>
				</Grid>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={AcadComplexDriverMarker} alt="Active Driver Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						Driver with Destination in Academice Complex
					</Typography>
				</Grid>
				<Typography variant="h6" align="center">User Markers</Typography>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={MHRUserMarker} alt="Active User Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						User with Destination in MHR-side
					</Typography>
				</Grid>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={SHRUserMarker} alt="Active User Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						User with Destination in SHR-side
					</Typography>
				</Grid>
				<Grid container className={classes.iconSection} alignItems="stretch">
					<img src={AcadComplexUserMarker} alt="Active User Marker" className={classes.imgIcon}/>
					<Typography className={classes.iconText}>
						User with Destination in Academice Complex
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Legends;
