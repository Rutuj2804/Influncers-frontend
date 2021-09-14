import React from 'react'
import ReactApexChart from 'react-apexcharts'

const AreaApexGraph = () => {

    const state = {
          
        series: [{
          name: "STOCK ABC",
          data: [9000,9500,10000,12000,15000,16000,20000,27000]
        }],
        options: {
          chart: {
            type: 'area',
            height: 300,
            zoom: {
              enabled: false
            }
          },
          // fill: {
          //   colors: ['#9C27B0']
          // },
          // colors:['#F44336', '#E91E63', '#9C27B0'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          
          title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left'
          },
          subtitle: {
            text: 'Price Movements',
            align: 'left'
          },
          labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'],
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
