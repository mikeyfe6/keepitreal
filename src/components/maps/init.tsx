import React, { useEffect, useRef, useState } from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

if (typeof window !== "undefined") {
    import("@googlemaps/js-api-loader").then(({ setOptions }) => {
        setOptions({
            key: process.env.GATSBY_GOOGLE_MAPS_KEY || "",
            v: "weekly",
            mapIds: process.env.GATSBY_GOOGLE_MAPS_ID
                ? [process.env.GATSBY_GOOGLE_MAPS_ID]
                : undefined,
        });
    });
}

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
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== "undefined");
    }, []);

    useEffect(() => {
        if (!isClient) return;

        let isMounted = true;

        (async () => {
            const { importLibrary } = await import("@googlemaps/js-api-loader");

            const [{ Map, InfoWindow }, { AdvancedMarkerElement }] =
                await Promise.all([
                    importLibrary("maps"),
                    importLibrary("marker"),
                ]);

            if (mapRef.current && isMounted) {
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

                    const markerUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        street + ", " + postalCode + " " + city
                    )}`;

                    advancedMarker.addEventListener("gmp-click", () => {
                        infoWindow.close();
                        infoWindow.setContent(`
                                    <div style="padding:4px 8px;font-size:12px;border-radius:3px;line-height:1.4;background:#162987;">
                                        <span style="font-weight:bold;color:#fff;">${companyName}</span><br/>
                                        ${street}, ${postalCode}<br/>
                                        ${city}, ${country}<br/>
                                        <a href="${markerUrl}" style="display:block;text-decoration:underline;margin-top:4px;" target="_blank">
                                        Openen in Google Maps
                                        </a>
                                    </div>
                                `);
                        infoWindow.open(map, advancedMarker);
                    });
                });
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [
        isClient,
        center,
        zoom,
        markers,
        companyName,
        street,
        postalCode,
        city,
        country,
    ]);

    if (!isClient) return null;

    return (
        <div
            ref={mapRef}
            style={{ width: "100%", height: "100%" }}
            className="gmaps"
        />
    );
};

export default GoogleMap;
