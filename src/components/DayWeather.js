import React, { Component } from "react";
import PropTypes from "prop-types";

class DayWeather extends Component{




	render(){
		const { currentLocation } = this.props;

		const options = currentLocation.consolidated_weather.map(r => (
			<li key={r.id}>
				<ul className="column">
					<li>{r.weather_state_abbr}</li>
					<li>
						<span>77</span>
						<span>89</span>
					</li> 
					<li>{r.applicable_date}</li>
					<li>{r.weather_state_name}</li>
				</ul>			
			</li>
		));

		return(
			<div className="weather">
				<ul class="weatherList">{options}</ul>
			</div>

		)
	};


};

export default DayWeather;