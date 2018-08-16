import React from "react"
import PropTypes from "prop-types"

import "../../css/Basic.css"

export class Basic extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.age
		}
	}

  onClickIncreaseMyAge() {
  	this.setState({
      age: this.state.age + 3
  	});
  }

  onClickDecreaseMyAge() {
  	this.setState({
      age: this.state.age - 3
  	});
  }

	render() {
		return (
			<div className="bodycontainer">
				<h2>Basic React component sample</h2>
				<p>This is a basic reactjs component sample, which change the value in state and triggered re-rendering</p>
				<hr/>
				<p>My name is {this.props.name} and my age is {this.state.age}</p>
				<button type="button" onClick={this.onClickIncreaseMyAge.bind(this)}>Click me to increase my age!</button>
				<br/>
				<br/>
				<button type="button" onClick={this.onClickDecreaseMyAge.bind(this)}>Click me to decrease my age!</button>
			</div>
			)
	}
}

Basic.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number
}