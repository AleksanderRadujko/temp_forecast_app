const makeCsvData = (arr) => {
    const csvString = [
        ["Date",
         "Temp",
         "Temp Min",
         "Temp Max",
         "Feels Like",
         "Pressure",
         "Humidity",
         "Wind Speed",
         "Description",
         "Icon"
        ],
        ...arr.map(obj => {
            const { dt_txt, main, weather, wind } = obj;
            return([
                dt_txt,
                Math.round(main.temp - 273.15),
                Math.round(main.temp_min - 273.15),
                Math.round(main.temp_max - 273.15),
                Math.round(main.feels_like - 273.15),
                main.pressure,
                main.humidity,
                wind.speed,
                weather[0].description,
                weather[0].icon
            ])
        })
    ]
    .map(e => e.join(","))
    .join("\n");

    return csvString;
}

export default makeCsvData;