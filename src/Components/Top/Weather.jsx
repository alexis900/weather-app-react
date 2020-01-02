import React, { Component } from 'react'

import SunImg from '../../resources/img/sun.png'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { location, temperature, isDay, text, iconURL } = this.props

        return (
            <div className="weather-container">
                <div className="header">{ location }</div>
                <div className="inner-container">
                    <div className="image"><img src={iconURL} alt=""/></div>
                    <div className="current-weather">{ temperature }º</div>
                </div>
                <div className="footer">{ text }</div>
            </div>
        )
    }
}
