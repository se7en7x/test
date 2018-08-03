import React, { Component } from "react";
import PropTypes from "prop-types";
import convert from "convert-units";

class DayWeather extends Component {
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
		console.log();
		return "wi " + iconMapping[weatherStateAbbr];
	};

	render() {
		const { currentLocation } = this.props;

		const options = currentLocation.consolidated_weather.map(r => (
			<li key={r.id}>
				<ul className="column">
					<li class={this.weatherIco(r.weather_state_abbr)} />
					<li>
						<span>
							{convert(r.min_temp)
								.from("C")
								.to("F")
								.toFixed(0)}
						</span>
						<span>
							{convert(r.max_temp)
								.from("C")
								.to("F")
								.toFixed(0)}
						</span>
					</li>
					<li>{r.applicable_date}</li>
					<li>{r.weather_state_name}</li>
				</ul>
			</li>
		));

		return (
			<div className="weather">
				<ul class="weatherList">{options}</ul>
			</div>
		);
	}
}

export default DayWeather;