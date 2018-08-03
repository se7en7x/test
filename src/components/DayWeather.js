import React, { Component } from "react";
import PropTypes from "prop-types";

class DayWeather extends Component{




	render(){
		const { currentLocation } = this.props;

		const options = currentLocation.consolidated_weather.map(r => (
			<li key={r.id}>
				{r.weather_state_abbr}
			</li>
		));

		return(
			<div className="weather">
				<ul>{options}</ul>
			</div>

		)
	};


};

export default DayWeather;