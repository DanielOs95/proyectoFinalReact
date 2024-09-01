import React, { useState } from 'react';


function Itinerary() {
    const [itinerary, setItinerary] = useState([]);

    const addToItinerary = (item) => {
        setItinerary([...itinerary, item]);
    };


    return (
        <div>
        <h2>Itinerario</h2>
            <ul>
            {itinerary.length > 0 ? (
                itinerary.map((item, index) => (
                    <li key={index}>{item}</li>
            ))
                
                ) : (
                    <p>No hay elementos en el itinerario</p>
                )}
            </ul>
        </div>
    );
}


export default Itinerary;