import React, { Component } from 'react';
import './App.css';

import './sass/App.scss'

import TopSection from './Components/Top/index'
import BottomSection from './Components/Bottom/index'

import axios from 'axios'
const YOUR_ACCESS_KEY = "9f05f6a85aed0907eeda33c5586fa6bd"


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cityName: "Barcelona",
      forcastDays: 5
    }
  }

  componentDidMount(){
    const { cityName, forcastDays } = this.state;
    const URL = `http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${cityName}&forecast_days=${forcastDays}`
    axios
    .get(URL)
    .then((res) => {
      console.log("DATA: ", res)
    }).catch((err) => {
      if(err)
        console.error("Cannot fetch Weather Data from API", err)
    })
  }

  render(){
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section"><TopSection /></div>
          <div className="top-section"><BottomSection /></div>
        </div>
      </div>
    )
  }
}

export default App;
