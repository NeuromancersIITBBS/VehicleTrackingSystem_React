import React from 'react';
import Map from '../../Components/Map/Map';
import DriverLogin from '../../Components/DriverLogin/DriverLogin';

const Driver = (props) => {
	const MapsAPIKey = 'AIzaSyDJKV1bs7RogqpcMvvSuSLTDPB19lPR5dI';
	return (
		<>
			<DriverLogin/>
			<Map
				isMarkerShown
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MapsAPIKey}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `80vh` }} />}
				mapElement={<div style={{ height: `100%` }} />} />
		</>
	);
}

export default Driver;
