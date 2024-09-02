import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '450px',
  height: '250px',
 
};

const mapStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
};

const Map = ({ location, onMapClick }) => {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={mapStyle}>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={location}
      onClick={(e) => onMapClick(e.latLng.lat(), e.latLng.lng())}
    />
    </div>
  );
};

export default Map;