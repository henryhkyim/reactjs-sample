import React from "react"
import PropTypes from "prop-types"

import { OneStockQuote } from "./OneStockQuote.js"

import "../../css/StockQuote.css"

export class StockQuote extends React.Component {

	renderQuote(symbol, index) {
		return <OneStockQuote key={index} stock={symbol}/>
	}

	render() {
		return (
			<div className="bodycontainer">
				<h2>Stock Quote</h2>
				<p>This is a reactjs sample demostrating the real time quote data refreshing.</p>
				<p className="redbold">*** This is just a sample page, the price are hypothetical and random generated. ***</p>
				<hr/>
				{this.props.stockList.map(this.renderQuote)}
				<div className="clearFloat"></div>
			</div>
		)
	}
}

StockQuote.propTypes = {
	stockList: PropTypes.array
}