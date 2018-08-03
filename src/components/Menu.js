import React, { Component } from "react";
import PropTypes from "prop-types";

import Search from "../containers/Search";

class Menu extends Component {
	render() {
		const { isMenuOpen, toggleMenu } = this.props;

		return (
			<div className={isMenuOpen ? "menu open" : "menu close"}>
				<i className = "menuBtn fas fa-bars"
					onClick={() => {
						toggleMenu();
					}}
				>
				</i>
				<i className="closeBtn far fa-times"
					onClick={() => {
						toggleMenu();
					}}

				></i>
				<Search />
			</div>
		);
	}
};

Menu.propTypes = {
	toggleMenu: PropTypes.func.isRequired
};

export default Menu;
