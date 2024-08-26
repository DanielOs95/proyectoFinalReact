import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getFlights } from '../amadeusService';


const FlightSearch = ({location}) => {
    const [flights, setFlights] = useState([]);
    const tripData = location?.state?.tripData || {};
    const { origin, destination, departureDate } = tripData


    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const data = await getFlights(origin, destination, departureDate);
                    setFlights(data.data)
            } catch (error) {
                console.error('Error Fetching Flights', error);
            }
        };

        if (origin && destination && departureDate) {
            fetchFlights();
        }
        
    }, [origin, destination, departureDate]);


    return (
        <div>
            <h2>Vuelos disponibles</h2>
            <ul>
                {flights.map((flight, index) => (
                    <li key={index}>
                    {flight.airline} - {flight.price} {flight.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}
    

export default FlightSearch;