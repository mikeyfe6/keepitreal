import React, { useState } from 'react';

import GoogleMapReact from 'google-map-react';

import * as mapsStyles from '../styles/modules/maps.module.scss';

import kirLogo from '../images/logo/KIR-icon.png';

const defaultProps = {
	center: {
		lat: 52.370216,
		lng: 4.895168,
	},
	zoom: 10,
};

const Marker = ({ lat, lng, imageUrl }) => (
	<div className={mapsStyles.marker} data-lat={lat} data-lng={lng}>
		<img src={imageUrl} alt='Marker' />
	</div>
);

const Maps = () => {
	const [pins] = useState([
		{ latitude: 52.370216, longitude: 4.895168, imageUrl: kirLogo },
		// { latitude: 52.3676, longitude: 4.9041, imageUrl: null },
	]);

	return (
		// <div className={mapsStyles.mapsContainer}>
		<div className={mapsStyles.maps}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.GATSBY_GOOGLE_MAPS_KEY,
					language: 'nl',
					region: 'NL',
				}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}>
				{pins.map((pin, index) => (
					<Marker
						key={index}
						lat={pin.latitude}
						lng={pin.longitude}
						imageUrl={pin.imageUrl}
					/>
				))}
			</GoogleMapReact>
		</div>
		// </div>
	);
};

export default Maps;
