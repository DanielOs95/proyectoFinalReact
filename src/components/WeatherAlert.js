import React, { useEffect, useState } from 'react';
import axios from 'axios';


function WeatherAlert ({location}) {
    const [weather, setWeather] = useState({});
    const tripData = location.state?.tripData || {};
    const { destination } = tripData;


    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: destination,
                    appid:process.env.REACT_APP_OPENWEATHER_API_KEY,
                    units:'metric',
                    },
                    
                });
                setWeather(response.data);
            } catch (error) {
                console.error(('Error fetching weather', error))
            }
        };

        fetchWeather();
    }, [destination]);


    return (
        <div>
            <h2>Clima en {destination}</h2>
            {weather.main ? (
                <div>
                    <p>Temperatura: {weather.main.temp} °C</p>
                    <p>Condiciones: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>No se pudo obtener el Clima.</p>
            )}
        </div>
    );
}



export default WeatherAlert;