import React from 'react'
import axios from 'axios'


const url="https://covid19.mathdro.id/api";

export const fetchData= async(country)=>{

   let apiUrl=url;

   if(country){
       apiUrl=url+'/countries/'+country;
   }

   let {data:{confirmed,recovered,deaths,lastUpdate}} =  await axios.get(apiUrl);
   let modifiedData={confirmed,recovered,deaths,lastUpdate}
   // console.log('aa',modifiedData);
   
   return modifiedData;
}

export const dailyFetchData= async()=>{
   const {data} =  await axios.get(url+`/daily`);
   
   const modifiedData=data.map((modidied) =>({
      confirmed:modidied.confirmed.total,
      deaths:modidied.deaths.total,
      date:modidied.reportDate,
   }));

   return modifiedData;

}

export const countryFetchData= async()=>{
   const {data:{countries}} =  await axios.get(url+'/countries');
   
   const modifiedData=countries.map(countries=>countries); 
  
   return modifiedData;
    
}


  


