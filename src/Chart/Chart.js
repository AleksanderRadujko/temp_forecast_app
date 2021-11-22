import React from 'react';

import { Line } from 'react-chartjs-2';

function Chart({data}) {
    return (
        <div style={{width: '60%'}}>
           <Line
            data={{
                labels: data.date,
                datasets: [{
                    data: data.temperatures,
                    borderColor: 'rgb(233, 126, 26)',
                    backgroundColor: 'rgb(233,126,26)',
                }]
            }}
            height={300}
            width={600}
            options={{
                maintainAspectRatio: true,
                scales: {
                    y: {
                        ticks: {
                            callback: function(value, index, values) {
                                return value + "°C";
                            }
                        },
                        grid: {
                            color: 'rgba(233, 126, 26, 0.3)',
                        },
                    },
                    x: {
                        grid: {
                            color: 'rgba(233, 126, 26, 0.3)',
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                }
            }}
           /> 
        </div>
    )
}

export default Chart
