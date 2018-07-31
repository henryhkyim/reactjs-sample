import React from "react";
import PropTypes from 'prop-types';

import "../css/OneStockQuote.css";

export class OneStockQuote extends React.Component {

	constructor(props) {
		super();
		const sampleQuoteData = new Map();
		sampleQuoteData.set("00005.HK", {desc: "HSBC HOLDINGS", price: 74.55, prev_close: 74.6});
		sampleQuoteData.set("00006.HK", {desc: "POWER ASSETS", price: 55.4, prev_close: 55.95});
		sampleQuoteData.set("00700.HK", {desc: "TENCENT", price: 356.4, prev_close: 367.2});
		sampleQuoteData.set("07336.HK", {desc: "FI MR HS", price: 5.73, prev_close: 5.71});
		this.state = {
			symbol: props.stock,
			desc: sampleQuoteData.get(props.stock).desc,
			price: sampleQuoteData.get(props.stock).price,
			priceChange: Math.round((sampleQuoteData.get(props.stock).price - sampleQuoteData.get(props.stock).prev_close) * 100 ) / 100
		};
		this.priceChangeCount = 0;
		setInterval(this.refreshPrice.bind(this), 10000 * Math.random());
	}

	refreshPrice() {
		var currentPriceChange = Math.round(Math.random() * 100) / 100;
		if (this.priceChangeCount % 2 == 1) {
			currentPriceChange = -currentPriceChange;
		}
		this.priceChangeCount += 1;
		this.setState({
			price: Math.round((this.state.price + currentPriceChange) * 100) / 100,
			priceChange: currentPriceChange
		});
	}

	render() {
	
		let priceChangeHtml = '';
		if (this.state.priceChange > 0) {
		  priceChangeHtml = (<div className="quoteBoxPrice">
		  	                   <h1 className="quoteBoxGreen">{this.state.price}</h1>
											     <p className="quoteBoxGreen">{this.state.priceChange}</p>
											   </div>);
		} else if (this.state.priceChange == 0) {
		  priceChangeHtml = (<div className="quoteBoxPrice">
		                       <h1 className="quoteBoxBlack">{this.state.price}</h1>
			                     <p className="quoteBoxBlack">{this.state.priceChange}</p>
			                   </div>);
		} else {
		  priceChangeHtml = (<div className="quoteBoxPrice">
		                       <h1 className="quoteBoxRed">{this.state.price}</h1>
			                     <p className="quoteBoxRed">{this.state.priceChange}</p>
			                   </div>);
		}
		return (
			<div className="quoteBox">
				<h3>{this.state.symbol}</h3>
				<p>{this.state.desc}</p>
				{priceChangeHtml}
			</div>
		);
	}
}

OneStockQuote.propTypes = {
	stock: PropTypes.string
};
