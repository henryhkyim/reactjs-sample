import React from "react";
import { QuestionPoolUtil } from "../utils/QuestionPoolUtils"
import { FlashGameQuestion } from "./FlashGameQuestion"
import { FlashGameResult } from "./FlashGameResult"

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
    this.levelBtn = this.levelBtn.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
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
					<FlashGameResult questionPool={this.questionPool}>
						<div>
              <p>Try again?</p>
              <button type="button" onClick={() => this.levelBtn(1)}>Level 1</button>
              <button type="button" onClick={() => this.levelBtn(2)}>Level 2</button>
              <button type="button" onClick={() => this.levelBtn(3)}>Level 3</button>
            </div>
					</FlashGameResult>
				)
				headingJsx = <div>Level: {this.state.level}  You got {this.state.correct} out of {this.state.total}!</div>
			} else {
				contentJsx = (<FlashGameQuestion level={this.state.level}
				                                 questionNum={this.state.questionNum} 
				                                 questionPool={this.questionPool} 
				                                 handleAnswer={this.handleAnswer} />
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