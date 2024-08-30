import React from 'react';
import axios from "axios";


const getAccesToken = async () => {
    try {
        const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', {
            grant_type: 'client_credentials',
            client_id: process.env.REACT_APP_AMADEUS_API_KEY,
            client_secret: process.env.REACT_APP_AMADEUS_API_SECRET,
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting acces_token', error);
    }
    console.log('API Key:', process.env.REACT_APP_AMADEUS_API_KEY);
console.log('API Secret:', process.env.REACT_APP_AMADEUS_API_SECRET);
};


export const getFlights = async (origin, destination, departureDate) => {
    const token = await getAccesToken();
    try {
        const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },

            params: {
                origin,
                destination,
                departureDate,
                },

            });
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
};



