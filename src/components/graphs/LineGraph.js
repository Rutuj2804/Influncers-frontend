import React from 'react'
import { Line } from 'react-chartjs-2'

const LineGraph = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default LineGraph