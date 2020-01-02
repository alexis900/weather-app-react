import React, { Component } from 'react'

export default class forecastDay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { day } = this.props
        return (
            <div className="forecastday-container">
                <div className="date">
                {day.dt_txt}
                </div>
                <div className="image">
                    <img src={"http://openweathermap.org/img/wn/"+ day.weather[0].icon +"@2x.png"} alt=""/>
                    </div>
                <div className="text">
                    {day.weather[0].description}
                    <br/>
                    {day.main.temp}º
                </div>
            </div>
        )
    }
}
