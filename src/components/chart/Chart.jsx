import React, { useEffect, useState } from 'react'
import { dailyFetchData } from '../../api';
import { Line,Bar } from 'react-chartjs-2'
import styles from './chart.module.css';


export default function Chart(props) {

 const [dailyData, setDailyData] = useState([])


    useEffect(() => {

        const APIData = async () => {
            setDailyData(await dailyFetchData());
        }
        APIData();
    },[])

   
     const lineChart=()=>{
      return dailyData ?  <Line 
        data={{
          labels:dailyData.map(({date})=>date),
          datasets:[{
              data:dailyData.map(({confirmed})=>confirmed),
              label:"Infected",
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
          },{
              data:dailyData.map(({deaths})=>deaths),
              label:"Deaths",
          }]
        }}

    />:null
    }

    const BarChart=()=>{
        return props.country ?  <Bar 
          data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
                label:'Infected',
                backgroundColor: ['rgba(75,192,192,1)','rgba(0,255,0,1)','rgba(255,0,0,1)'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
            }]
          }}
  
      />:null
      }

    return (
        <div style={{width:700,height:"auto"}}>
            {
                 props.country ? BarChart(): lineChart()
            }
        </div>
    )
}
