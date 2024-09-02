/*const Icons = (icon) => {
    switch (icon) {
      case 'Thunderstorm':
        return '/icons/thunderstorm-day-rain.svg';
      case 'Drizzle':
        return '/icons/drizzle.svg';
      case 'Rain':
        return '/icons/rain.svg';
      case 'Snow':
        return '/icons/snow.svg';
      case 'Clear':
        return '/icons/clear-day.svg';
      case 'Atmosphere':
        return '/icons/barometer.svg';
      case 'Clouds':
        return '/icons/fog.svg';
      case 'Fog':
        return '/icons/fog-day.svg';
      case 'Haze':
        return '/icons/haze.svg';
      case 'Smoke':
        return '/icons/smoke.svg';
      default:
        return '/icons/clear-day.svg';
    }
  };*/
  

const Icons = (icon) => {
   switch (icon) {
    case 'Thunderstorm':
        icon='icons/thunderstorm-day-rain.svg'
        console.log("tormenta")
        break;
    case 'Drizzle':
        icon='/icons/drizzle.svg'
        console.log("LLOVIZNA")
        break;
    case 'Rain':
        icon='/icons/rain.svg'
        console.log("LLUVIA")
        break;
    case 'Snow':
        icon='/icons/snow.svg'
        console.log("NIEVE")
        break;
    
    case 'Clear':
        icon='/icons/clear-day.svg'
        console.log("LIMPIO")
        break;     
    case 'Atmosphere':
        icon='/icons/barometer.svg'
        console.log("LIMPIO")
        break;     
    case 'Clouds':
        icon='/icons/fog.svg'
        console.log("NUBES")
        break;     
    case 'Fog':
        icon='/icons/fog-day.svg'
        console.log("NUBES")
        break;                                
    case 'Haze':
        icon='/icons/haze.svg'
        console.log("BRUMAS")
        break;     
    case 'Smoke':
        icon='/icons/smoke.svg'
        console.log("HUMO")
        break;     
    default:
        icon='/icons/clear-day.svg'
        console.log("LIMPIO")            
   }

   return icon
}


export default Icons;