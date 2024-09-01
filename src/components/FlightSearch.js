import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFlights } from '../amadeusService';


const FlightSearch = () => {
    const location = useLocation();
    const [flights, setFlights] = useState([]);
    const tripData = location?.state?.tripData || {};
    const { origin, destination, departureDate } = tripData;


    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const data = await getFlights(origin, destination, departureDate);
                    console.log('Flight data', data)
                    setFlights(data?.data || [])
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
            {flights.length > 0 ? (

            
            <ul>
                {flights.map((flight, index) => (
                    <li key={index}>
                    {flight.airline} - {flight.price.total} {flight.depatureTime}
                    </li>
                ))}
            </ul>
            ) : (
                <p> No se encontraron vuelos </p>
            )}   
        </div>
    );
}
    

export default FlightSearch;