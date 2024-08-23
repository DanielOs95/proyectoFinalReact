import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FlightSearch from './components/FlightSearch';
import HotelSearch from './components/HotelSearch';
import Itinerary from './components/Itinerary';
import Map from './components/Map';
import WeatherAlert from './components/WeatherAlert';


function App () {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightSearch />} />
        <Route path="/hotels" element={<HotelSearch />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/map" element={<Map />} />
        <Route path="/weather" element={<WeatherAlert />} />
      </Routes>
    </Router>
  );
}

export default App;