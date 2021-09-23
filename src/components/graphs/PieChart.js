import React from 'react'
import { Pie } from "react-chartjs-2"

const PieChart = ({ 
                  labels=
                    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 
                  data=[65, 59, 80, 81, 56, 55, 40], 
                  backgroundColor=[
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                  ], 
                  borderColor= [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)'
                  ]}) => {

    const dataOptions = {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: data,
          fill: false,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          tension: 0.1
        }]
      };

    return (
        <div>
            <Pie data={dataOptions} />
        </div>
    )
}

export default PieChart
