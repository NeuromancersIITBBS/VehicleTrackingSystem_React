import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { getDriverMarker, getUserMarker } from '../../Data/MarkerMappings';
import { LocationMappings } from '../../Data/LocationMappings';
import { useTheme } from '@material-ui/core/styles';
import { googleMapsDarkMode } from '../../utils/HelperFunctions';
import { connect } from 'react-redux';

// TODO: optimize the users update part
const Map = (props) => {
	console.log(props.users, props.drivers)
	const theme = useTheme();
	let options = { styles: "none"};;
	if (theme.palette.type === 'dark') {
		options = { styles: googleMapsDarkMode() }
	}
	const driverMarkers = props.drivers.map((driver) => {
		return <Marker 
		position={driver.location} 
		key={driver.phoneNumber} 
		icon={getDriverMarker(driver.status, driver.destination)}
		/>
	});

	// Group all the users by their pickup points
	// if there is > 1 user at the pickup point show them by group icon
	// group icon color is decided by the destination of majority
	// else show the user icon

	const userMarkers = props.users.map((user) => {
		const userLocation = user.location.pickupPoint === 'MyLocation' ? user.location.location : LocationMappings[user.location.pickupPoint];
		return <Marker 
		position={userLocation} 
		key={user.id} 
		icon={getUserMarker(user.destination)}
		/>
	});

	return (
		<GoogleMap
			// defaultZoom={15}
			defaultZoom={10}
			// defaultCenter={{ lat: 20.148505, lng: 85.671233 }}
			defaultCenter={{ lat: 22.148505, lng: 71.171233 }}
			options={options}>
			{driverMarkers}
			{userMarkers}
		</GoogleMap>
	);
};


const mapStateToProps = (state) => {
	return {
		drivers: state.driver.drivers,
		users: state.user.users
	};
};

// export default  connect(mapStateToProps)(withScriptjs(withGoogleMap(Map)));