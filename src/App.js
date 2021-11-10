import React, {useState} from 'react';

import './App.css';

import Form from "./Form/Form";
import Loading from "./Loading/Loading";
import Chart from './Chart/Chart';
import Map from './Map/Map';

function App() {
    const [plottingData, setPlottingData] = useState();
    const [cityData, setCityData] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    return (
        <div className="app">
            <main>
                <h1 className="logo">temperature.app</h1>
                <Form 
                    setPlottingData={setPlottingData}
                    setCityData={setCityData}
                    setIsLoading={setIsLoading}
                />
                <section className="forecast">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                        <div className="forecast-city">{cityData && `Temperatures for ${cityData.name}, ${cityData.country}`}</div>
                        <div className="forecast-cards">
                            {plottingData && <Chart data={plottingData} />}
                            {cityData && <Map cityData={cityData} />}
                        </div>
                        </>
                    )}
                </section>
            </main>  
        </div>
    );
}

export default App;


