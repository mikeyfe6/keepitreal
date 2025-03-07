import React, { useEffect, useRef } from "react";

import { Loader } from "@googlemaps/js-api-loader";

interface GoogleMapProps {
    center: { lat: number; lng: number };
    zoom: number;
    markers?: { lat: number; lng: number; imageUrl?: string }[];
}

const GoogleMap: React.FC<GoogleMapProps> = ({
    center,
    zoom,
    markers = [],
}) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY || "",
            version: "weekly",
        });

        loader.importLibrary("maps").then(async (mapsLib) => {
            const { Map } = mapsLib;
            const { AdvancedMarkerElement } = await loader.importLibrary(
                "marker"
            );

            if (mapRef.current) {
                const map = new Map(mapRef.current, {
                    center,
                    zoom,
                    mapId: process.env.GATSBY_GOOGLE_MAPS_ID || "",
                });

                markers.forEach((marker) => {
                    const markerElement = document.createElement("div");
                    markerElement.innerHTML = `<img src="${marker.imageUrl}" alt="Marker" style="width:40px; height:40px;" />`;

                    new AdvancedMarkerElement({
                        position: { lat: marker.lat, lng: marker.lng },
                        map,
                        content: markerElement,
                    });
                });
            }
        });
    }, [center, zoom, markers]);

    return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

export default GoogleMap;
