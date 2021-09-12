import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutGraph = () => {

    
    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10,25,12,7,20],
                backgroundColor: ['#cad432', '#afd521', '#c62', '#34d', '#000', '#45a'],
            }
        ]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            }
          }
        },
    };

    return (
        <Doughnut
            data={data}
            options={config}
        />
    )
}

export default DoughnutGraph