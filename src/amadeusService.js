import axios from "axios";


const AMADEUS_API_KEY = process.env.REACT_APP_AMADEUS_API_KEY;
const AMADEUS_API_SECRET = process.env.REACT_APP_AMADEUS_API_SECRET; 



const amadeusClient = axios.create({
    baseURL: 'https://test.api.amadeus.com/v2',
    headers: {
        'Authorization': `Bearer ${AMADEUS_API_KEY}`
    }
});



export const getFlights = async (origin, destination, departureDate) => {
    try {
        const response = await amadeusClient.get('shopping/flight-offers', {
                params: {
                    origin,
                    destination,
                    departureDate,
                }
            });
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
};

