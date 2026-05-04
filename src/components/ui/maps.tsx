import * as React from "react";

import GoogleMaps from "../maps/init";

import kirLogo from "../../images/favicon/icon.svg";

import * as mapsStyles from "../../styles/modules/ui/maps.module.scss";

const Maps: React.FC = () => {
    const center = { lat: 52.29873062961723, lng: 4.950875379606085 };

    const markers = [{ lat: 52.29760127532847, lng: 4.95097730354226, imageUrl: kirLogo }];

    return (
        <div className={mapsStyles.maps}>
            <GoogleMaps center={center} zoom={15} markers={markers} />
        </div>
    );
};

export default Maps;
