import axios from 'axios';
const API_KEY = 'f4821b5997aafd4659073f8fa75ce628';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//actioncreaters have to return an action - object that has to have type property
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)
  console.log('request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
