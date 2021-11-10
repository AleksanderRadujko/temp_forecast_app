const getPlottingData = (csvData) => {
    const rows = csvData.split('\n').slice(1);

    const date = [];
    const temp = [];

    rows.forEach(row => {
        const columns = row.split(',');
        date.push(columns[0]);
        temp.push(columns[1]);
    });

    return {date, temp};
}

export default getPlottingData;