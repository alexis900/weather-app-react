import React, { Component } from 'react';
import './App.css';

import './sass/App.scss'

import TopSection from './Components/Top/index'
import BottomSection from './Components/Bottom/index'

import axios from 'axios'
const YOUR_API_KEY = "640f42aa2e9f82c4d0016da7dc0b7605"


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cityName: "Barcelona",
      isLoading: true
    }
  }

  updateWeather(){
    const { cityName } = this.state
    const URLweather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${YOUR_API_KEY}&units=metric`
    const URLforecast = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${YOUR_API_KEY}&units=metric`
    
    axios
      .get(URLweather)
      .then(res => {
        return res.data;
       
      })
      .then(data => {
        this.setState({
          temperature: data.main.temp,
          text: data.weather[0].description,
          icon: data.weather[0].icon
        });
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API, ", err);
      });

      axios
      .get(URLforecast)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          forecastdays: data.list
        });
        console.log(this.state)
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
  })
  }

  render(){
    const {
      isLoading,
      cityName,
      temperature,
      text,
      icon,
      forecastdays
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
              text={text} 
              icon={icon}
              eventEmitter={this.props.eventEmitter}/>
            </div>
            )
          }
          <div className="top-section"><BottomSection forecastdays={forecastdays}/></div>
        </div>
      </div>
    )
  }
}

export default App;
