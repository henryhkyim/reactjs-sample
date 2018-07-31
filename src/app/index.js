import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header.js";
import { Basic } from "./components/Basic.js";
import { StockQuote } from "./components/StockQuote.js";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			page: "basic"
		};
	}

	onChangeMenu(newPage) {
    this.setState({
      page: newPage
    });
	}

	render() {
		let body = "";
		if (this.state.page == "basic") {
			body = <Basic name={"Jane Smith"} age={18}/>;
		} else if (this.state.page == "component.interaction") {
			console.log("to be built - component.interaction");
		} else if (this.state.page == "stock.quote") {
			body = <StockQuote/>
		}
		return (
			<div>
				<div>
					<Header page={this.state.page} onChangeMenu={this.onChangeMenu.bind(this)}/>
				</div>
				<div>
					{body}
				</div>
			</div>
			);
	}
}

render(<App/>, window.document.getElementById("app"));