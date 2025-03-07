import * as React from "react";

import GoogleMaps from "../maps/init";

import kirLogo from "../../images/favicon/icon.svg";

import * as mapsStyles from "../../styles/modules/components/maps.module.scss";

const Maps: React.FC = () => {
    const center = { lat: 52.378456, lng: 4.91302 };

    const markers = [{ lat: 52.3779694, lng: 4.9128862, imageUrl: kirLogo }];

    return (
        <div className={mapsStyles.maps}>
            <GoogleMaps center={center} zoom={15} markers={markers} />
        </div>
    );
};

export default Maps;
