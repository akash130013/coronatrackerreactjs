import React, { Component } from 'react'
import {Card,Chart,Country} from './components'
import  styles from './styles/App.module.css'
import { fetchData } from './api'


export default class App extends Component {

state={
    data:"",
    country:"",
}

 async componentDidMount(){
  const data= await fetchData();
  this.setState({
      data:data,
  })
 }

  handleCountry=async(countryName)=>{
    const data=await fetchData(countryName);
    this.setState({
        data:data,
        country:countryName
    })
 }



    render() {
        // console.log("abc",this.state.data);
        return (
            <div className={styles.container}>
                <Card data={this.state.data} />
                <Chart country={this.state.country} data={this.state.data} />
                <Country  onSelectCountry={this.handleCountry} />
            </div>
        )
    }
}
