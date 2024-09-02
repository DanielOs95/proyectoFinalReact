import axios from "axios";

export const getWeatherData = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`

    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data', error);
        return null;
    }
};


export const getWeatherDataByCoordinates = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data', error);
        return null;
    }
};