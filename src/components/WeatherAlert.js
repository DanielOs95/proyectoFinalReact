import React, { useEffect, useState } from 'react';
import axios from 'axios';


function WeatherAlert ({location}) {
    const [weather, setWeather] = useState({});
    const { destination } = location.state.tripData;


    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('API_URL', {
                    params: { q: destination },
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
            {weather && (
                <div>
                    <p>Temperatura: {weather.temp}</p>
                    <p>Condiciones: {weather.description}</p>
                </div>
            )}
        </div>
    );
}



export default WeatherAlert;