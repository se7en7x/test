import React, { Component } from "react";
import PropTypes from "prop-types";

class LocationInfo extends Component {
	render() {
		const { city, state } = this.props;
		if (city || state) {
			return (
				<div>
					{city},{state}
				</div>
			);
		} else {
			return "";
		}
	}
}

LocationInfo.propTypes = {
	city: PropTypes.string,
	state: PropTypes.string
};

export default LocationInfo;
