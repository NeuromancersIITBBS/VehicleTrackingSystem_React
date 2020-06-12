import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { getDriverMarker } from '../../Data/markerMappings';
import { useTheme } from '@material-ui/core/styles';
import { googleMapsDarkMode } from '../../utils/HelperFunctions';
import { connect } from 'react-redux';

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
	
	return (
		<GoogleMap
			// defaultZoom={15}
			defaultZoom={10}
			// defaultCenter={{ lat: 20.148505, lng: 85.671233 }}
			defaultCenter={{ lat: 22.148505, lng: 71.171233 }}
			options={options}>
			{props.isMarkerShown && driverMarkers}
		</GoogleMap>
	);
};


const mapStateToProps = (state) => {
	return {
		drivers: state.driver.drivers,
		users: state.user.users
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// saveToken: (token) => dispatch(updateDriverToken(token))
	};
};

// export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DriverLogin));

export default  connect(mapStateToProps, mapDispatchToProps)(withScriptjs(withGoogleMap(Map)));