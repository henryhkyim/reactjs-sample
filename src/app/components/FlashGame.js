import React from "react";
import PropTypes from "prop-types";
import { QuestionPoolUtil } from "../utils/QuestionPoolUtils"

import "../css/FlashGame.css";

export class FlashGame extends React.Component {
	constructor() {
    super()
    this.state = {
    	ready: false,
    	score: 0
    }
	}

	readyBtn() {
		console.log('let\'s start!')
		this.setState({
			ready: true,
			questionNum: 1
		})
	}

	render() {
		let questionPool = new QuestionPoolUtil()
		let contentJsx = ""
		if (!this.state.ready) {
			contentJsx = (<p>Are you ready to start? <button type="button" onClick={this.readyBtn.bind(this)}>Let's start</button></p>)
		} else {
			contentJsx = (
				<div className="questionContainer">
					<h3>Question {this.state.questionNum}:</h3>
					<p>What does "{questionPool.getQuestionByIdx(questionPool.pullQuestion())}" mean?</p>
					<ul>
						{questionPool.pullAnswers(4).map( (ansIdx, idx) => <li key={idx}> { questionPool.getAnswerOption(idx) }. { questionPool.getAnswerByIdx(ansIdx) } </li> )}
					</ul>
				</div>
			)
		}
		return (
			<div className="bodycontainer">
				<h2 className="floatLeft">Flash Game</h2>
				<h2 className="floatRight">Score: {this.state.score}</h2>
				{contentJsx}
		</div>
		);
	}
}