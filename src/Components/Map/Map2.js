import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { getDriverMarker, getUserMarker } from '../../Data/markerMappings';
import { googleMapsDarkMode } from '../../utils/HelperFunctions';
import { getPickupPointName } from '../../Data/PickupPoints';
import { getStatusText } from '../../Data/DriverStatus';
import { LocationMappings } from '../../Data/locationMappings';
import { randomizeLocation } from '../../utils/HelperFunctions';

import Dialog from '@material-ui/core/Dialog';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

const styles = {
	root: {
		minWidth: 275,
	}
};

const MarkerWrapper = ({ component, infoWindowContent }) => {
	const [open, setDialogState] = useState(false);
	const openDialog = () => { setDialogState(true) };
	const handleClose = () => { setDialogState(false) };
	const infoWindow = (
		<Dialog onClose={handleClose} aria-labelledby="map-info-panel" open={open}>
			{infoWindowContent}
		</Dialog>
	);

	return (
		<div>
			<div onClick={openDialog}>
				{component}
			</div>
			{infoWindow}
		</div>
	);
};

class Map extends Component {
	static defaultProps = {
		center: {
			lat: 22.148505,
			lng: 71.171233
		},
		// zoom: 15,
		zoom: 10,
	};

	render() {
		const { classes, theme } = this.props;

		let options = { styles: 'none', gestureHandling: 'greedy' };;
		if (theme.palette.type === 'dark') {
			options.styles = googleMapsDarkMode();
		}

		const driverMarkers = this.props.drivers.map((driver, index) => {
			const driverCard = (<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography variant="h6" component="h3" gutterBottom>
						Driver - {index+1}
					</Typography>
					<Typography variant="body2" component="p">
						Status: {getStatusText(driver.status)} <br />
						Occupied - Seats: {driver.occupiedSeats} <br />
						Destination: {(driver.destination) ? getPickupPointName(driver.destination) : 'Not Set'} <br />
					</Typography>
				</CardContent>
			</Card>);
			return (<MarkerWrapper
				lat={driver.location.lat}
				lng={driver.location.lng}
				key={driver.phoneNumber}
				component={<img
					src={getDriverMarker(driver.status, driver.destination)}
					alt="Driver Marker"
				/>}
				infoWindowContent={driverCard}
			/>);
		});

		const userMarkers = this.props.users.map((user) => {
			const driverCard = (<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography variant="body2" component="p">
						Destination: {(user.destination) ? getPickupPointName(user.destination) : 'Not Set'} <br />
					</Typography>
				</CardContent>
			</Card>);
			let userLocation = user.location.pickupPoint === 'MyLocation' ? 
								user.location.location : randomizeLocation(LocationMappings[user.location.pickupPoint]);
			return (<MarkerWrapper
				lat={userLocation.lat}
				lng={userLocation.lng}
				key={user.id}
				component={<img
					src={getUserMarker(user.destination)}
					alt="User Marker"
				/>}
				infoWindowContent={driverCard}
			/>);
		});

		return (
			<div style={{ height: '100%	', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDJKV1bs7RogqpcMvvSuSLTDPB19lPR5dI' }}
					options={options}
					defaultCenter={{ 
						lat: 20.148505,
						lng: 85.671233 
					}}
					// defaultCenter={{
					// 	lat: 22.148505,
					// 	lng: 71.171233
					// }}
					// defaultZoom={10}
					defaultZoom={15} >
					{userMarkers}
					{driverMarkers}
				</GoogleMapReact>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		drivers: state.driver.drivers,
		users: state.user.users
	};
};

export default withTheme(withStyles(styles)(connect(mapStateToProps)(Map)));