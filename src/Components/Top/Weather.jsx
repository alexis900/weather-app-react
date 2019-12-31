import React, { Component } from 'react'

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
                    <div className="image">Image Here</div>
                    <div className="current-weather">10</div>
                </div>
                <div className="footer">Sunny</div>
            </div>
        )
    }
}
