import React, { Component } from "react";
import PropTypes from "prop-types";

class DayWeather extends Component{




	render(){
		const { currentLocation } = this.props;

		const options = currentLocation.consolidated_weather.map(r => (
			<li key={r.id}>
				<ul>
					<li>{r.weather_state_abbr}</li>
					<li>
						<span>{r.max_temp}</span>
						<span>{r.min_temp}</span>
					</li>
					<li>{r.applicable_date}</li>
					<li>{r.weather_state_name}</li>
				</ul>			
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