import React from 'react'
import ReactApexChart from 'react-apexcharts'

const AreaApexGraph = () => {

    const state = {
          
        series: [{
          name: "STOCK ABC",
          data: [9000,9500,10000,12000]
        }],
        options: {
          chart: {
            type: 'area',
            height: 350,
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          
          title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left'
          },
          subtitle: {
            text: 'Price Movements',
            align: 'left'
          },
          labels: ['2000', '2001', '2002', '2003'],
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            opposite: false
          },
          legend: {
            horizontalAlign: 'left'
          }
        },
      
      
      };

    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="area" />
        </div>
    )
}

export default AreaApexGraph
