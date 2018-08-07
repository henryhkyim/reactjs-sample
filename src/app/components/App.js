import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./Header"
import { Basic } from "./Basic"
import { StockQuote } from "./StockQuote"

export class App extends React.Component {
	render() {
		let stockList = ["00005.HK", "00006.HK", "00700.HK", "07336.HK", "00005.HK", "00006.HK", "00700.HK", "07336.HK"]
		return (
			<BrowserRouter>
				<div>
					<div>
						<Header/>
					</div>
					<div>
						<Switch>
							<Route path="/" exact component={() => <Basic name={"Peter"} age={18}/>}/>
							<Route path="/basic" exact component={() => <Basic name={"Henry Basic"} age={23}/>}/>
							<Route path="/stockQuote" exact component={() => <StockQuote stockList={stockList}/>}/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
