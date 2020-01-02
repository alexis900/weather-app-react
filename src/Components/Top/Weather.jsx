import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { location, temperature, text, icon } = this.props

        return (
            <div className="weather-container">
                <div className="header">{ location }</div>
                <div className="inner-container">
                    <div className="image"><img src={"//openweathermap.org/img/wn/" + icon + "@2x.png"} alt=""/></div>
                    <div className="current-weather">{ temperature }º</div>
                </div>
                <div className="footer">{ text }</div>
            </div>
        )
    }
}
