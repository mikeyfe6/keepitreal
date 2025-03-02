import React, { useState } from "react";

import GoogleMapReact from "google-map-react";

import * as mapsStyles from "../styles/modules/maps.module.scss";

import kirLogo from "../images/logo/KIR-icon.png";

interface DefaultProps {
    center: {
        lat: number;
        lng: number;
    };
    zoom: number;
}

const defaultProps: DefaultProps = {
    center: {
        lat: 52.370216,
        lng: 4.895168,
    },
    zoom: 15,
};

interface MarkerProps {
    lat: number;
    lng: number;
    imageUrl: string | null;
}

const Marker: React.FC<MarkerProps> = ({ lat, lng, imageUrl }) => (
    <div className={mapsStyles.marker} data-lat={lat} data-lng={lng}>
        {imageUrl && <img src={imageUrl} alt="Marker" />}
    </div>
);

interface Pin {
    latitude: number;
    longitude: number;
    imageUrl: string | null;
}

const Maps: React.FC = () => {
    const [pins] = useState<Pin[]>([
        { latitude: 52.370216, longitude: 4.895168, imageUrl: kirLogo },
    ]);

    return (
        <div className={mapsStyles.maps}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.GATSBY_GOOGLE_MAPS_KEY!,
                    language: "nl",
                    region: "NL",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
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
    );
};

export default Maps;
