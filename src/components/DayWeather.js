import React, { Component } from "react";
import PropTypes from "prop-types";

class DayWeather extends Component{

	weatherIco = weatherStateAbbr => {
		let iconMapping = {
			sn: "wi-day-snow",
			sl: "wi-day-sleet",
			h: "wi-day-hail",
			t: "wi-day-thunderstorm",
			hr: "wi-rain-wind",
			lr: "wi-day-rain",
			s: "wi-day-showers",
			hc: "wi-day-cloudy",
			lc: "wi-day-sunny-overcast",
			c: "wi-day-sunny"
		};
		return "wi " + iconMapping[weatherStateAbbr];
	};


	render(){
		const { currentLocation } = this.props;

		const options = currentLocation.consolidated_weather.map(r => (
			<li key={r.id}>
				<ul>
					<li class={this.weatherIco(r.weather_state_abbr)}></li>
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