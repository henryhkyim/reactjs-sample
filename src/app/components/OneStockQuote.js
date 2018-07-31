import React from "react";
import PropTypes from 'prop-types';

import "../css/OneStockQuote.css";

export class OneStockQuote extends React.Component {

	render() {
		const sampleQuoteData = new Map();
		sampleQuoteData.set("00005.HK", {desc: "HSBC HOLDINGS", price: 74.55, prev_close: 74.6});
		sampleQuoteData.set("00006.HK", {desc: "POWER ASSETS", price: 55.4, prev_close: 55.95});
		sampleQuoteData.set("00700.HK", {desc: "TENCENT", price: 356.4, prev_close: 367.2});
		sampleQuoteData.set("07336.HK", {desc: "FI MR HS", price: 5.73, prev_close: 5.71});
	
		let change = sampleQuoteData.get(this.props.stock).price - sampleQuoteData.get(this.props.stock).prev_close;
		change = change.toFixed(2);
		return (
			<div className="quoteBox">
				<h3>{this.props.stock}</h3>
				<p>{sampleQuoteData.get(this.props.stock).desc}</p>
				<h1 className={change > 0 ? "quoteBoxGreen" : (change == 0 ? "quoteBoxBlack" : "quoteBoxRed")}>{sampleQuoteData.get(this.props.stock).price}</h1>
				<p className={change > 0 ? "quoteBoxGreen" : (change == 0 ? "quoteBoxBlack" : "quoteBoxRed")}>{change}</p>
			</div>
		);
	}
}

OneStockQuote.propTypes = {
	stock: PropTypes.string
};
