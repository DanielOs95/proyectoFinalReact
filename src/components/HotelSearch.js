import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';


function HotelSearch({location}) {
    const [hotels, setHotels] = useState([]);
    const currentlocation = useLocation();
    const tripData = location?.state?.tripData || {};
    const { destination, departureDate, returnDate } = tripData;

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('https://test.api.amadeus.com/v2/shopping/hotel-offers', {
                    params: {
                        location: destination,
                        checkinDate: departureDate,
                        checkoutDate: returnDate,
                    },

                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_AMADEUS_API_TOKEN}`
                    }
                });
                setHotels(response.data.data);
            } catch (error) {
                console.error('Error fetching hotels', error);
            }
        };

        if (destination && departureDate && returnDate) {
            fetchHotels();
        }

        
    }, [destination, departureDate, returnDate]);

    return (
        <div>
            <h2>Hoteles disponibles</h2>
            {hotels.length > 0 ? (
                <ul>
                {hotels.map((hotel, index) =>(
                    <li key={index}>
                        {hotel.name} - {hotel.offers[0].price.total} - {hotel.hotel.rating} estrellas
                    </li>
                ))}
            </ul>
            ) : (
                <p>No se encontrtaron hoteles</p>

            )}
            
        </div>
    );
}


export default HotelSearch;