import React from "react"
import PropTypes from "prop-types"
import { QuestionPoolUtil } from "../utils/QuestionPoolUtils"

export class FlashGameResult extends React.Component {

	constructor(props) {
		super()
		this.renderResult = this.renderResult.bind(this)
	}

	renderResult(qnIdx, idx) {
		return (
			<div key={idx}>
				<h3>Question {idx + 1}:</h3>
			  <p>What does "{this.props.questionPool.getQuestionByIdx(qnIdx)}" mean?</p>
				<p>Answer: {this.props.questionPool.getAnswerByIdx(qnIdx)}</p>
			</div>
			)
	}

	render() {
		return (
				<div className="resultContainer">
					{this.props.children}
					{this.props.questionPool.getUsedQuestionList().map(this.renderResult)}
				</div>
			)
	}

}

FlashGameResult.propTypes = {
	questionPool: PropTypes.object
}