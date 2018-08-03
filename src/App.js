import React, { Component } from "react";
import Counter from "./containers/Counter";
import Menu from "./containers/Menu";
import DayWeather from "./containers/DayWeather"

class App extends Component {
	render() {
		return (
			<div className="main">
				<Menu />
				<DayWeather />
			</div>
		);
	}
}

export default App;
