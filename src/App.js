import React, { useState } from 'react';
import Map from '../src/components/Map';
import WeatherAlert from './components/WeatherAlert';
import { getWeatherData, getWeatherDataByCoordinates } from './services/openWeatherService';
import WeatherRadar from './pages/weatherRadar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';


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
      <Router>
        <Navbar />
          
        <Routes>
       
          <Route path='/Radar' element={<WeatherRadar />} />

          <Route 
            path='/'
            element={
              <>
              <WeatherAlert onSearch={handleCitySearch} weatherData={weatherData} />
          
          <br />
          <br />
            <Map location={location} onMapClick={hadleMapClick} />
            </>
            }
          />
      
            
          </Routes>
      </Router> 
    );
}

export default App;