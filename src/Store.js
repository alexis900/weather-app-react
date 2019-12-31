import React, { Component } from 'react'

export default class Store extends Component {
    constructor(props) {
        super(props);
        // Main App Stete

        this.state = {
            appName: "Weather Up"
        }
    }
    render() {
        return React.Children.map(this.props.children, (child => {
            return React.cloneElement(child, { ...this.state });
        }));
    }
}
