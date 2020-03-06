// TODO place base URL here
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q=hyattsville&units=imperial&APPID=";
const APPID = process.env.REACT_APP_APPID;
console.log(APPID)


//Define functions for hitting routes on Weather API

function getWeatherData() {
    return fetch(BASE_URL + APPID).then(res => res.json());
}



// TODO export functions from here

export default {
    getWeatherData
}