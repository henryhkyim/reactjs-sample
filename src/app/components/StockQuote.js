import React from "react";
import PropTypes from 'prop-types';

import "../css/StockQuote.css";

export class StockQuote extends React.Component {
	render() {
		return (
			<div className="bodycontainer">
				<h2> Stock Quote</h2>
				<p>This is a reactjs sample demostrating the real time quote data refreshing</p>
				<hr/>
			</div>
		)
	}
}
