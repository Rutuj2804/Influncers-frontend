import React from 'react'
import { Line } from 'react-chartjs-2'

const StackedBarLineGraph = () => {

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const data = {
    labels: labels,
    datasets: [
            {
                label: 'Dataset 1',
                data: [12, 45, 26, 10, 56, 24, 45],
                borderColor: ['#31e7fe'],
                backgroundColor: ['#31e7fe'],
                stack: 'combined',
                type: 'bar'
            },
            {
                label: 'Dataset 2',
                data: [22, 55, 36, 20, 66, 34, 55],
                borderColor: ['#2d53da'],
                backgroundColor: ['#2d53da'],
                stack: 'combined'
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Stacked Line/Bar Chart'
                }
            },
            scales: {
                y: {
                    stacked: true
                }
            }
        },
    };

    return (
        <Line options={config} data={data} />
    )
}

export default StackedBarLineGraph