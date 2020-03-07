// TODO place base URL here
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=hyattsville&units=imperial&APPID=";
//const APPID = process.env.REACT_APP_APPID;
const APPID = '4b79ea98e1380c1f6987c30f4703b089';
console.log(APPID)


//Define functions for hitting routes on Weather API

function getWeatherData() {
    return fetch(BASE_URL + APPID).then(res => res.json());
}



// TODO export functions from here

export default {
    getWeatherData
}