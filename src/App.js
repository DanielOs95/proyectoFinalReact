import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FlightSearch from './components/FlightSearch';
import HotelSearch from './components/HotelSearch';
import Itinerary from './components/Itinerary';
import Map from '../src/components/Map';
import WeatherAlert from './components/WeatherAlert';


function App () {

  const onSearch = (data) => {
    console.log('Datos de busqueda:', data)
  }
  
  return (


    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/hotels">HotelSearch</Link>
          </li>
          <li>
            <Link to="itinerary">Itinerary</Link>
          </li>
          <li>
            <Link to="weather">WeatherAlert</Link>
          </li>
        </ul>
      </nav>
      
    

      <Routes>
        <Route path='/' element={<Home onSearch={onSearch} />} />
        <Route path='/flights' element={<FlightSearch />} />
        <Route path='/hotels' element={<HotelSearch />} />
        <Route path='/itinerary' element={<Itinerary />} />
        <Route path='/map' element={<Map />} />
        <Route path='/weather' element={<WeatherAlert />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;