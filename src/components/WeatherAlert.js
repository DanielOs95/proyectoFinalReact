import React, { useState, useEffect } from 'react'
import '../styles/Climate.css';
import Icons from './Icons';
//import { getWeatherData } from '../services/openWeatherService';


function WeatherAlert({ onSearch, weatherData }) {
  const [search, setSearch] = useState('')
  const [values, setValues] = useState(null)
  const [icon, setIcon] = useState('')

  const handleSearch = (e) => {
    if(e.key === 'Enter'){      
      onSearch(search);
      setSearch('')
    }
  };


  useEffect(()=>{
      if (weatherData) {
        setValues(weatherData);
        setIcon(weatherData.weather[0].main);
      } 
  },[weatherData]); 

  return (
    <>
    <div className="container">
      <h2>WeatherAlert</h2>
      <div className='row'>
        <input 
          onKeyDown={handleSearch}
          type="text"   
          value={search}
          onChange={(e) => setSearch(e.target.value)}       
          autoFocus
        />
      </div>
    </div>

    <div className='card'>
      {(values) ? (
        <div className='card-container'>
          <h1 className='city-name'>{values.name}</h1>
          <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
          <img className='icon' src={Icons(icon)} alt="icon-weather" />
          <div className='card-footer'>
            <p className='temp-max-min'>
            Min{values.main.temp_min.toFixed(0)}&deg;  |  
            Max{values.main.temp_max.toFixed(0)}&deg; 
            </p>
          </div>
        </div>
      ) : (
        <h1>{search ? "City not found" : "Por Favor ingresa una ciudad"}</h1>
      )}

    </div>

    {/*<div className='map-container'>
       <Map tripData={{ latitude: 0, longitude: 0}}/>
    </div>*/}
  
    </>  
    
  );
}



export default WeatherAlert;
