import React, { useEffect } from "react";
import { useLoadScript } from '@react-google-maps/api';
import { useRef } from "react";
//import { Zoom } from "@mui/material";


const libraries = ['places'];

const WeatherRadar = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const mapRef = useRef(null);


    useEffect(() => {
        if (!isLoaded) return;

        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 0, lng: 0 },
            zoom: 2,
        });

        const openWeatherMapLayer = new window.google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                const url = `https://tile.openweathermap.org/map/precipitation_new/${zoom}/${coord.x}/${coord.y}.png?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
                console.log('Tile URL', url);
                return url;
            },
            tileSize: new window.google.maps.Size(256, 256),
            name: 'OpenWeatherMap Precipitation',
            opacity: 20,
        });

        map.overlayMapTypes.insertAt(0, openWeatherMapLayer);
    }, [isLoaded]);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {isLoaded ? (
                <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
            ) : (
                <div>Cargando mapa...</div>
            )}
        </div>
    );
};


export default WeatherRadar;