import React, { Component } from 'react'
import './style.scss'

import Weather from './Weather'

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="top-container">
                <div className="title">Weather Up</div>
                <Weather/>
                <button className="btn btn-select-location">Select location</button>
            </div>
        )
    }
}
