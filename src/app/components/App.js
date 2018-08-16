import React from "react"
import { render } from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Header } from "./common/Header"
import { Basic } from "./basic/Basic"
import { FlashGame } from "./flashgame/FlashGame"
import { StockQuote } from "./stockquote/StockQuote"

export class App extends React.Component {
	render() {
		let stockList = ["00005.HK", "00006.HK", "00700.HK", "07336.HK", "00005.HK", "00006.HK", "00700.HK", "07336.HK",
									   "00005.HK", "00006.HK", "00700.HK", "07336.HK", "00005.HK", "00006.HK", "00700.HK", "07336.HK"]
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
							<Route path="/flashGame" exact component={FlashGame}/>
							<Route path="/stockQuote" exact component={() => <StockQuote stockList={stockList}/>}/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}
