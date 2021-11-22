import React, { useState, useEffect } from 'react';

import "./Form.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import axios from "../axios";
import request from "../requests";

const delay = (ms) =>  {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Form({ setPlottingData, setCityData, setIsLoading }) {
    const [inputValue, setInputValue] = useState("London");
    const [error, setError] = useState(false);

    const makePlottingData = (arr) => {
        let date = [];
        let temperatures = [];
        const plottingData = arr.reduce((data, item) => {
                const { dt_txt, main:{temp} } = item;
                date.push(dt_txt);
                temperatures.push(Math.round((temp - 273.15)));
                return data;
            }, {date, temperatures});

        return plottingData;
    }

    const getData = async () => {
        const link = request.fetchForecastWeather.replace("London", inputValue);
        await delay(1000);
        try {
            const response = await axios.get(link);
            const plottingData = makePlottingData(response.data.list);
            setPlottingData(plottingData);
            setCityData(response.data.city);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setError(true)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getData();
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setPlottingData();
        setCityData();

        getData();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="container">
                <input
                    className={error ? "error" : undefined}
                    type="text"
                    placeholder="Type a city (ex. London)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={() => setError(false)}
                    onKeyPress={() => setError(false)}
                    required
                />
                <button type="submit"><FontAwesomeIcon icon={faSearch} style={{fontSize: "25px"}} /></button>
            </div>
            {error && (
                <div style={{color:"red"}}>Please try again</div>
            )}
        </form>
    )
}

export default Form
