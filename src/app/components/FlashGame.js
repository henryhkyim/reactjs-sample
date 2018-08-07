import React from "react";
import PropTypes from 'prop-types';

export class FlashGame extends React.Component {
	constructor() {
    super()
    this.state = {
    	ready: false
    }
	}

	readyBtn() {
		console.log('let\'s start!')
		this.setState({
			ready: true
		})
	}

	render() {
		let readyJsx = ""
		if (!this.state.ready) {
			readyJsx = (<p>Are you ready to start? <button type="button" onClick={this.readyBtn.bind(this)}>Let's start</button></p>)
		}
		return (
			<div className="bodycontainer">
				<h2>Flash Game</h2>
				{readyJsx}
		</div>
		);
	}
}