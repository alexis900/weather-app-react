import React, { Component } from "react";
import "./style.scss";

import ForecastDay from "./forecastDay";

export default class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { forecastdays } = this.props;
    return (
      <div className="bottom-container">
        <div className="inner-container">
          {forecastdays &&
            forecastdays.map((dt_text, dt) => {
                console.log(dt_text)
              return <ForecastDay day={dt_text} key={dt} />;
            })}
        </div>
      </div>
    );
  }
}
