import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./containers/Counter";
import Menu from "./containers/Menu";
import DayWeather from "./components/DayWeather";
import ThemeSelector from "./containers/ThemeSelector";
import LocationInfo from  "./components/LocationInfo"


class App extends Component {
	render() {
		const { theme,currentLocation} = this.props;
		return (
			<div className="main" class={theme} >
				<Menu />
				<DayWeather currentLocation={currentLocation} />
				<ThemeSelector />
				<LocationInfo city={currentLocation.parent.title} state={currentLocation.title}/>
			</div>
		);
	}
}

export const mapStateToProps = store => {
  return {
    theme: store.theme.selectedTheme,
    currentLocation: store.currentLocation
  };
};

export default connect(mapStateToProps, null)(App);

