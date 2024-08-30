import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import WeatherAlert from '../components/WeatherAlert';

const Home = ({ onSearch }) => { 
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [tripData, setTripData] = useState(null);


    const onSubmit = handleSubmit((data) => {
        const formattedData = {
            origin: data.origen,
            destination: data.destino,
            departureDate: data.fecha,
            time: data.horario,
        };

        onSearch(formattedData);
        setTripData(formattedData);
        reset();
        navigate('/flights', {state: { tripData: formattedData } });
        
    });


    return (
        <div>
        <form onSubmit={onSubmit}>

            <label htmlFor="origen">De donde viajas</label>
            <input 
              type="text" 
              id="origen"
              {...register('origen', {required: true})}
        />
        {errors.origen && <span>Campo requerido</span>}
<br />
        <label
            htmlFor="destino">A donde vas
        </label>
        <input type="text" 
            {...register("destino", {required: true})}
        />
        {errors.destino && <span>Campo requerido</span>}

<br />

        <label
            htmlFor="horario">hora de salida
        </label>
        <input type="time" 
            {...register("horario", {required: true})}
        />
        {errors.horario && <span>Campo requerido</span>}

<br />

        <label
            htmlFor="fecha">Cuando viajas
        </label>
        <input type="date" 
            {...register("fecha", {required: true})}
        />
        {errors.fecha && <span>Campo requerido</span>}

<br />

        <label
            htmlFor="terminos">Acepto terminos y condiciones
        </label>
        <input type="checkbox" 
            {...register("terminos", {required: true})}
        />
        {errors.terminos && <span>Campo requerido</span>}

<br />
<br />
        <button type="submit">Buscar vuelos</button>

        </form>

        {tripData && <WeatherAlert location={{state:{ tripData }}} />}
<br />
<br />
        <Map />
<br />
<br />        
        </div>

        );

};



export default Home;