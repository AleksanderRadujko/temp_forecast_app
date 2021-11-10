import React from 'react';

import "./Card.css";

const calculateAverage = (arr) => {
    return Math.round(arr.reduce((a,b) => a+b, 0) / arr.length);
}

const returnAverageData = (arr) => {
    let data = {
        description: [],
        icon: [],
        feels_like: [],
        humidity: [],
        pressure: [],
        temp: [],
        temp_max: [],
        temp_min: [],
        wind_speed: [],
    }

    arr.forEach((obj) => {
        data.description.push(obj.description);
        data.icon.push(obj.icon);
        data.feels_like.push(obj.feels_like);
        data.humidity.push(obj.humidity);
        data.pressure.push(obj.pressure);
        data.temp.push(obj.temp);
        data.temp_max.push(obj.temp_max);
        data.temp_min.push(obj.temp_min);
        data.wind_speed.push(obj.wind_speed);
    });

    return({
        description: data.description[Math.floor(data.description.length / 2)],
        icon: data.icon[Math.floor(data.icon.length / 2)],
        feels_like: Math.max(...data.feels_like),
        humidity: calculateAverage(data.humidity),
        pressure: calculateAverage(data.pressure),
        temp: Math.max(...data.temp),
        temp_max: Math.max(...data.temp_max),
        temp_min: Math.min(...data.temp_min),
        wind_speed: calculateAverage(data.wind_speed),
    });
}

function Card({dailyData}) {
    const data = returnAverageData(dailyData);

    console.log(dailyData);

    return (
        <div className="card">
            <div className="header">
                <h1>{data.temp}°C</h1>
                <div className="header-weather">
                    <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.description} />
                    <h2>{data.description}</h2>
                </div>
            </div>
            <div className="details">
                <h2>Details</h2>
                <p>
                    <span>Feels like:</span>
                    <span className="bold-span">{data.feels_like} °C</span>
                </p>
                <p>
                    <span>Min/Max:</span>
                    <span className="bold-span">{data.temp_min}/{data.temp_max}°C</span>
                </p>
                <p>
                    <span>Humidity:</span>
                    <span className="bold-span">{data.humidity}%</span>
                </p>
                <p>
                    <span>Pressure:</span>
                    <span className="bold-span">{data.pressure}hPa</span>
                </p>
                <p>
                    <span>Wind speed:</span>
                    <span className="bold-span">{data.wind_speed}m/s</span>
                </p>
            </div>
            <div className="footer">
                <h1>weather.app</h1>
                <h1>{dailyData[0].date}</h1>
            </div>
        </div>
    )
}

export default Card