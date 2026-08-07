import axios from "axios";

const API = "http://localhost:8081/api/weather";

export const getWeather = (city) =>
    axios.get(`${API}/${city}`);

export const getForecast = (city) =>
    axios.get(`${API}/forecast/${city}`);