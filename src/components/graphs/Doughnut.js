import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutGraph = ({ 
                        data= [10,25,12,7,20], 
                        labels=['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                        backgroundColor= [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'] }) => {

    
    const dataOptions = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data,
                backgroundColor: backgroundColor,
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
            data={dataOptions}
            options={config}
        />
    )
}

export default DoughnutGraph