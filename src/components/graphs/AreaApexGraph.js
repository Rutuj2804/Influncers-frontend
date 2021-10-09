import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const AreaApexGraph = ({ data=[9000,9500,10000,12000,15000,16000,20000,27000], labels=['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'], title='Fundamental Analysis of Stocks', subtitle="Time Spent" }) => {

  const [ themeColor, setThemeColor ] = useState()

  useEffect(()=>{
    if(localStorage.getItem('theme') === 'dark'){
      setThemeColor('#fff')
    } else {
      setThemeColor('#000')
    }
  } ,[])

    const state = {
          
        series: [{
          name: subtitle,
          data: data
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
            text: title,
            align: 'left',
            style: {
              color: themeColor
            }
          },
          subtitle: {
            text: subtitle,
            align: 'left',
            style: {
              color: themeColor
            }
          },
          labels: labels,
          xaxis: {
            type: 'datetime',
            labels: {
              style: {
                colors: [themeColor]
              }
            },
          },
          yaxis: {
            opposite: false,
            labels:{
              style: {
                colors: [themeColor]
              }
            }
          },
          legend: {
            horizontalAlign: 'left',
            labels: {
              colors: [themeColor]
            }
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
