import React, { Component } from "react";
import PropTypes from "prop-types";

import Search from "../containers/Search";

class ThemeSelector extends Component {
	render() {
		const { themes, selectedTheme } = this.props;
				console.log("themes:")
		console.log(themes)

		const options = themes.map(theme => (
			<span key={theme} class={theme} onClick={e =>{this.props.selectTheme(theme)}}>
			</span>
		));

		return (
			<div class="themeSelector">
			{options}
			</div>
		);
	}
};

ThemeSelector.propTypes = {
	themes: PropTypes.string.isRequired,
	selectedTheme: PropTypes.array.isRequired,
	selectTheme: PropTypes.func.isRequired
};

export default ThemeSelector;
