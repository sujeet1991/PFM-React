import React from 'react'
import './linechart.css';
import Chart from 'react-google-charts';

const  linechart=()=>{
  return (
    <Chart
        width={'500px'}
        height={'300px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Year', '', ''],
          ['Nov-18',  0,      200],
          ['Dec-18',  800,      1560],
          ['Jan-19',  2500,       2120],

        ]}
        options={{
            color: '#a6aaac', 
          fontSize: 13, 
          fontName: 'PFEncoreSansPro-Regular',
          curveType: 'function',
          legend: { position: 'none' },
          crosshair: 'none',
          chartArea:{left:65,top:40,width:'85%',height:'70%'},

        hAxis: {
            showTextEvery:1,
            minorGridlines: {
                        count: 0,
            }

        },
        vAxis: {
            gridlines :{ count : 0}
        },

        
        series: {
            0: { color: '#dd7a7f' },
            1: { color: '#c7222a' },
          },

        }}
        rootProps={{ 'data-testid': '2' }}
/>
  )
}

export default linechart;
