import React, { useEffect, useRef } from "react";

import { Loader } from "@googlemaps/js-api-loader";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

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
    const { companyName, street, postalCode, city, country } =
        useSiteMetadata();

    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY || "",
            version: "weekly",
        });

        loader.importLibrary("maps").then(async (mapsLib) => {
            const { Map, InfoWindow } = mapsLib;
            const { AdvancedMarkerElement } =
                await loader.importLibrary("marker");

            if (mapRef.current) {
                const map = new Map(mapRef.current, {
                    mapId: process.env.GATSBY_GOOGLE_MAPS_ID || "",
                    center,
                    zoom,
                    zoomControl: true,
                    fullscreenControl: true,
                });

                const infoWindow = new InfoWindow();

                markers.forEach((marker) => {
                    const markerElement = document.createElement("div");
                    markerElement.innerHTML = `<img src="${marker.imageUrl}" alt="Marker" style="width:40px; height:40px;" />`;

                    const advancedMarker = new AdvancedMarkerElement({
                        position: { lat: marker.lat, lng: marker.lng },
                        map,
                        content: markerElement,
                        gmpClickable: true,
                    });

                    const markerStyle = `
                       padding: 4px 8px;
                       font-size: 12px;
                       border-radius: 3px;
                       line-height: 1.4;
                       background: #162987;
                    `;

                    const linkStyle = `
                        display: block;
                        text-decoration: underline; 
                        margin-top: 4px;
                    `;

                    const titleStyle = `
                        font-weight: bold;
                        color: #fff;
                    `;

                    const markerUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        street + ", " + postalCode + " " + city
                    )}`;

                    advancedMarker.addEventListener("gmp-click", () => {
                        infoWindow.close();
                        infoWindow.setContent(
                            `<div style="${markerStyle}"> 
                                <span style="${titleStyle}">${companyName}</span> <br />
                                ${street}, ${postalCode} <br />
                                ${city}, ${country} <br />
                                <a href="${markerUrl}" style="${linkStyle} target="_blank">
                                    Openen in Google Maps
                                </a>
                            </div>`
                        );
                        infoWindow.open(map, advancedMarker);
                    });
                });
            }
        });
    }, [center, zoom, markers]);

    return (
        <div
            ref={mapRef}
            style={{ width: "100%", height: "100%" }}
            className="gmaps"
        />
    );
};

export default GoogleMap;
