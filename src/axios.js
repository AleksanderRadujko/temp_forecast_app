import axios from 'axios';

const base_url = "https://api.openweathermap.org/data/2.5/";

const instance = axios.create({
    baseURL: base_url
});

export default instance;