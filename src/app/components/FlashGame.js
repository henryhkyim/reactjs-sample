import React from "react";
import PropTypes from "prop-types";
import { QuestionPoolUtil } from "../utils/QuestionPoolUtils"

import "../css/FlashGame.css";

export class FlashGame extends React.Component {
	constructor() {
    super()
		this.questionPool = new QuestionPoolUtil()
    this.state = {
  		level: -1,
    	correct: 0,
    	incorrect: 0,
    	total: 0
    }
    this.levelBtn.bind(this)
    this.renderAnswer.bind(this)
	}

	levelBtn(level) {
		console.log(`Start with level ${level}`)
		this.questionPool.clearUsedQuestionList()
		this.setState({
			level: level,
    	correct: 0,
    	incorrect: 0,
    	total: 0,
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

	renderResult(qnIdx, idx) {
		return (
			<div key={idx}>
				<h3>Question {idx + 1}:</h3>
			  <p>What does "{this.questionPool.getQuestionByIdx(qnIdx)}" mean?</p>
				<p>Answer: {this.questionPool.getAnswerByIdx(qnIdx)}</p>
			</div>
			)
	}

	render() {
		let contentJsx = ""
		let headingJsx = ""
		if (this.state.level == -1) {
			contentJsx = (<div className="questionContainer">
				              <p>Are you ready to start?</p>
				              <button type="button" onClick={() => this.levelBtn(1)}>Level 1</button>
				              <button type="button" onClick={() => this.levelBtn(2)}>Level 2</button>
				              <button type="button" onClick={() => this.levelBtn(3)}>Level 3</button>
				            </div>)
			headingJsx = ""
		} else {
			if (this.state.total == 10) {
				contentJsx = (
					<div className="resultContainer">
						{this.questionPool.getUsedQuestionList().map(this.renderResult.bind(this))}
						<div>
              <p>Try again?</p>
              <button type="button" onClick={() => this.levelBtn(1)}>Level 1</button>
              <button type="button" onClick={() => this.levelBtn(2)}>Level 2</button>
              <button type="button" onClick={() => this.levelBtn(3)}>Level 3</button>
            </div>
					</div>
				)
				headingJsx = <div>Level: {this.state.level}  You got {this.state.correct} out of {this.state.total}!</div>
			} else {
				contentJsx = (
					<div className="questionContainer">
						<h3>Question {this.state.questionNum}:</h3>
						<p>What does "{this.questionPool.getQuestionByIdx(this.questionPool.pullQuestion())}" mean?</p>
						<ul>
							{this.questionPool.pullAnswers(this.state.level+1).map(this.renderAnswer.bind(this))}
						</ul>
					</div>
				)
				headingJsx = (<div>
										    Level: {this.state.level} Correct: {this.state.correct} Incorrect: {this.state.incorrect} Total: {this.state.total}
										  </div>
										 )
			}
		}
		return (
			<div className="bodycontainer">
				<h2 className="floatLeft">Flash Game</h2>
				<h2 className="floatRight">{headingJsx}</h2>
				{contentJsx}
			</div>
		);
	}
}