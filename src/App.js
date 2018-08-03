import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./containers/Counter";
import Menu from "./containers/Menu";
import DayWeather from "./containers/DayWeather";



class App extends Component {
	render() {
		const { theme } = this.props;
		return (
			<div  className={`main ${theme}`} >
				<Menu />
				<DayWeather />
			</div>
		);
	}
}

export const mapStateToProps = store => {
  return {
    theme: store.theme.selectedTheme
  };
};

export default connect(mapStateToProps, null)(App);

