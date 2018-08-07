import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "../css/Header.css";

/* a stateless component */
export const Header = (props) => {
	return (
		<div className="container">
			<ul>
				<li><NavLink to="/basic" activeClassName="currentpage">Basic React Sample</NavLink></li>
				<li><NavLink to="/flashGame" activeClassName="currentpage">Flash Game</NavLink></li>
				<li><NavLink to="/stockQuote" activeClassName="currentpage">Stock Quote Sample</NavLink></li>
			</ul>
		</div>
		);
};

Header.propTypes = {
	page: PropTypes.string,
	onChangeMenu: PropTypes.func
};