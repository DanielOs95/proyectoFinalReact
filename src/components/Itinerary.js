import React, { useState } from 'react';


function Itinerary() {
    const [itinerary, setItinerary] = useState([]);

    const addToItinerary = (item) => {
        setItinerary([...Itinerary, item]);
    };


    return (
        <div>
            <ul>
                {itinerary.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


export default Itinerary;