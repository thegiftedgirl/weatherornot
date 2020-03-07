import React from 'react';
import {Link, NavLink} from 'react-router-dom';



const Forecast = ({ weatherData }) => {
       const UI = weatherData.name ?
        <div> 
            <h2> Your Current Weather Conditions</h2>
            <div>
            <h3>In {weatherData.name} it's currently {Math.trunc(weatherData.main.temp)} &deg; Degrees</h3>
            </div>
            <div>
            <button><Link to="/ootd">What to Wear? </Link></button>
          </div> 

        </div> 
        :
        <h1>Loading...</h1>  

    return (
        <div>
            {UI}
        </div>
    );
};



export default Forecast;