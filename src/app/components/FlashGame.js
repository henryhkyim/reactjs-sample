import React from "react";
import PropTypes from "prop-types";
import { QuestionPoolUtil } from "../utils/QuestionPoolUtils"

import "../css/FlashGame.css";

export class FlashGame extends React.Component {
	constructor() {
    super()
		this.questionPool = new QuestionPoolUtil()
    this.state = {
    	ready: false,
    	correct: 0,
    	incorrect: 0,
    	total: 0
    }
	}

	readyBtn() {
		console.log('let\'s start!')
		this.setState({
			ready: true,
			questionNum: 1
		})
	}

	handleAnswer(idx) {
		let correct = this.state.correct
		let incorrect = this.state.incorrect
		let total = this.state.total + 1
//		console.log(`you picked ${idx}, ie ${this.questionPool.getAnswerByIdx(this.questionPool.getCurrentAnswerIdxList()[idx])}`)
		if (this.questionPool.getCurrentAnswerIdxList()[idx] == this.questionPool.getCurrentQuestionIdx()) {
			correct = correct + 1
		} else {
			incorrect = incorrect + 1
		}
		this.setState({
			correct: correct,
			incorrect: incorrect,
			total: total,
			questionNum: this.state.questionNum + 1
		})
	}

	renderAnswer(ansIdx, idx) {
		return (<li key={idx}> 
							<button type="button" className="answerButton" onClick={() => this.handleAnswer(idx)}>
			          {this.questionPool.getAnswerOption(idx)}. {this.questionPool.getAnswerByIdx(ansIdx)} 
			        </button>
		        </li>)
	}

	render() {
		let contentJsx = ""
		if (!this.state.ready) {
			contentJsx = (<div className="questionContainer">
				              <p>Are you ready to start?</p>
				              <button type="button" onClick={this.readyBtn.bind(this)}>Let's start</button>
				            </div>)
		} else {
			contentJsx = (
				<div className="questionContainer">
					<h3>Question {this.state.questionNum}:</h3>
					<p>What does "{this.questionPool.getQuestionByIdx(this.questionPool.pullQuestion())}" mean?</p>
					<ul>
						{this.questionPool.pullAnswers(4).map(this.renderAnswer.bind(this))}
					</ul>
				</div>
			)
		}
		return (
			<div className="bodycontainer">
				<h2 className="floatLeft">Flash Game</h2>
				<h2 className="floatRight">Correct: {this.state.correct} Incorrect: {this.state.incorrect} Total: {this.state.total}</h2>
				{contentJsx}
			</div>
		);
	}
}