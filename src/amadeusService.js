import React from 'react';
import axios from "axios";

const BASE_URL = 'https://test.api.amadeus.com'

const getAccesToken = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/v1/security/oauth2/token/`, 
        new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: process.env.REACT_APP_AMADEUS_API_KEY,
            client_secret: process.env.REACT_APP_AMADEUS_API_SECRET,
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        console.log('Access Token:', response.data.access_token);
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access_token', error);
    }
};

export const getFlights = async (origin, destination, departureDate) => {
    const token = await getAccesToken();
    try {
        const response = await axios.get(`${BASE_URL}/v2/shopping/flight-offers`, {
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


