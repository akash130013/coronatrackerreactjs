import React, { useEffect, useState } from 'react'
import { countryFetchData } from '../../api';
import FormControl from '@material-ui/core/FormControl';



export default function Country(props) {

    const [countryData,setCountryData]=useState([]);

    const [countryName,setCountryName]=useState("DEFAULT");

    useEffect(() => {
        const APIData = async () => {
            setCountryData(await countryFetchData());
        }
        APIData();
    },[])

   let  findCountry=(e)=>{
       setCountryName(e.target.value);
       props.onSelectCountry(e.target.value);
   }

    return (
        <div>
            <FormControl>     
           <select value={countryName} onChange={findCountry}>
                <option value="DEFAULT" disabled>Choose a country ...</option>
                   {
                       countryData ?  countryData.map((country,i)=>{
                       return <option value={country.name} key={i}>{country.name}</option>
                       }) :null
                   }
                </select>
            </FormControl>
        </div>
    )
}
