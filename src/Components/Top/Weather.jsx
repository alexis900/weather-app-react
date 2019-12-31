import React, { Component } from 'react'

import SunImg from '../../resources/img/sun.png'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="weather-container">
                <div className="header">Location Name</div>
                <div className="inner-container">
                    <div className="image"><img src={SunImg} alt=""/></div>
                    <div className="current-weather">10 º</div>
                </div>
                <div className="footer">Sunny</div>
            </div>
        )
    }
}
