import React, { Component } from "react";
import PropTypes from "prop-types";

class LocationInfo extends Component {
	render() {
		const { city, state } = this.props;

		return (
			<div>
			{city},{state}
			</div>
		);
	}
};

LocationInfo.propTypes = {
	city: PropTypes.string,
	state: PropTypes.string
};

export default LocationInfo;
