import React, { useState } from 'react';
import getWeatherData from '../../utils/getWeatherData';







const Forecast = () => {
let {responseObj, setResponseObj}  = useState({}); {
return (
    <div> 
        <h2>Current Weather Conditions</h2>
        <div>
            { JSON.stringify(responseObj)}
        </div>

        <button onClick={getWeatherData}>Get Forecast</button>
    </div>   
<body>
            $("#location").text(result.name)
        
            
            
            const F = Math.round(result.main.temp * (9/5) - 459.67);
            const Fahrenheit = F.toString();
            $("#temperature").text(Fahrenheit);
    
            $("#sky").text(result.weather[0].description);
            
            const windSpeed = Math.round(result.wind.speed / .44704);
            const wind = windSpeed.toString();
            $("#wind").text(windSpeed);
    
        }
    })
)
</body>
}
}
export default Forecast;