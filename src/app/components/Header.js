import React from "react";
import PropTypes from 'prop-types';

import "../css/Header.css";

/* a stateless component */
export const Header = (props) => {
	return (
		<div className="container">
			<ul>
				<li><a className={props.page == "basic" ? "currentpage" : ""} href="#" onClick={() => props.onChangeMenu("basic")}>Basic</a></li>
				<li><a className={props.page == "component.interaction" ? "currentpage" : ""} href="#" onClick={() => props.onChangeMenu("component.interaction")}>Component Interaction</a></li>
				<li><a className={props.page == "stock.quote" ? "currentpage" : ""} href="#" onClick={() => props.onChangeMenu("stock.quote")}>Stock Quote</a></li>
			</ul>
		</div>
		);
};

Header.propTypes = {
	page: PropTypes.string,
	onChangeMenu: PropTypes.func
};