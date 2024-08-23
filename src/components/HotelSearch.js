import React, { useEffect, useState } from 'react'
import axios from 'axios'


function HotelSearch({location}) {
    const [hotels, setHotels] = useState([]);
    const { destination, departureDate, returnDate } = location.state.tripData;

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('API_URL', {
                    params: {
                        location: destination,
                        checking: departureDate,
                        checkout: returnDate,
                    },
                });
                setHotels(response.data);
            } catch (error) {
                console.error('Error fetching hotels', error);
            }
        };


        fetchHotels();
    }, [destination, departureDate, returnDate]);

    return (
        <div>
            <h2>Hoteles disponibles</h2>
            <ul>
                {hotels.map((hotel, index) =>(
                    <li key={index}>
                        {hotel.name} - {hotel.price} - {hotel.rating} estrellas
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default HotelSearch;