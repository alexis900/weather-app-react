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
      forcastDays: 5,
      isLoading: true
    }
  }

  updateWeather(){
    const { cityName, forcastDays } = this.state

    const URL =  `http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${cityName}&forecast_days=${forcastDays}`
    axios
      .get(URL)
      .then(res => {
        console.log(res.data)
        return res.data;
       
      })
      .then(data => {
        this.setState({
          isLoading: false,
          temperature: data.current.temperature,
          isDay: data.current.is_day,
          text: data.current.weather_descriptions[0],
          iconURL: data.current.weather_icons[0]
        });
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API, ", err);
      });

  }

  componentDidMount(){
  const { eventEmitter } = this.props

  this.updateWeather()
  
  eventEmitter.on("updateWeather", (data) => {
    this.setState({
      cityName: data
    }, () => this.updateWeather())
    
    console.log("locationName:", data)
  })
    
  }

  render(){
    const {
      isLoading,
      cityName,
      temperature,
      isDay,
      text,
      iconURL,
      //forecastdays
    } = this.state;


    return (
      <div className="app-container">
        <div className="main-container">
          { isLoading && <h3>Loading Weather...</h3>}
          { !isLoading &&  (
          <div className="top-section">
            <TopSection 
              location={cityName} 
              temperature={temperature} 
              isDay={isDay} 
              text={text} 
              iconURL={iconURL}
              eventEmitter={this.props.eventEmitter}/>
            </div>
            )
          }
          <div className="top-section"><BottomSection /></div>
        </div>
      </div>
    )
  }
}

export default App;
