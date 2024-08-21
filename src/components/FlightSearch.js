import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FlightSearch = ({location}) => {
    const [flights, setFlights] = useState([]);
    const { origin, destination, departureDate } = location.state.tripData;


    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await axios.get('API_URL', {
                    params: {
                        origin,
                        destination,
                        departureDate,
                    }, 
                });
                setFlights(response.data);
            } catch (error) {
                console.error('Error Fetching Flights', error);
            }
        };

        fetchFlights();
    }, [origin, destination, departureDate]);


    return (
        <div>
            <h2>Vuelos disponibles</h2>
            <ul>
                {flights.map.call((flight, index) => (
                    <li key={index}>
                    {flight.airline} - {flight.price} {flight.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}
    

export default FlightSearch;