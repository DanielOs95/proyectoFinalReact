import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '450px',
  height: '250px',
};



const Map = ({tripData}) => {
  
  const center = {
    lat: tripData?.latitude || -34.397,
    lng: tripData?.longitude || 150.644,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    />
  );
};

export default Map;