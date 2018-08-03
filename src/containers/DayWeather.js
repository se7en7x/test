import React, { Component } from "react";
import DayWeather from "../components/DayWeather";
import { connect } from "react-redux";


export class WeatherComponent extends Component {

  render() {
    return (
      <DayWeather {...this.props}/>
    );
  }
};

export const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation
  };
};


export default connect(mapStateToProps, null)(DayWeather);
