const api_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchForecastWeather: `forecast?q=London&appid=${api_KEY}`,
};

export default requests;