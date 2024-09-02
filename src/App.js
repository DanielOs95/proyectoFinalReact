import React, { useState } from 'react';
import Map from '../src/components/Map';
import WeatherAlert from './components/WeatherAlert';
import { getWeatherData, getWeatherDataByCoordinates } from './services/openWeatherService';


function App () {

  const [location, setlocation] = useState({lat: 40.7128, lng: -74.0060});
  const [weatherData, setWeatherData] = useState(null);


  const hadleMapClick = async (lat, lng) => {
    setlocation({ lat, lng });
    const data = await getWeatherDataByCoordinates(lat, lng);
    setWeatherData(data);
  };

  const handleCitySearch = async (city) => {
    const data = await getWeatherData(city);
    if (data) {
      setWeatherData(data);
      setlocation({ lat: data.coord.lat, lng: data.coord.lon });

    } else {
      console.error('No weather data found for this city');
    }
  };


    return (
        <div>
          <WeatherAlert onSearch={handleCitySearch} weatherData={weatherData} />
          <Map location={location} onMapClick={hadleMapClick} />
        </div>
    )
}

export default App;