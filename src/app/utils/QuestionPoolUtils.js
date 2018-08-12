import { randomNumber } from "./NumberUtils"

export class QuestionPoolUtil {
	constructor() {
		this.questionPool = [
			{question: "accelerando, accel.", answer: "gradually getting faster"},
			{question: "ad libitum, ad lib.", answer: "at choice, freely"},
			{question: "adagietto", answer: "rather slow (faster than adagio)"},
			{question: "adagio", answer: "slow"},
			{question: "affettuoso", answer: "tenderly"},
			{question: "affrettando", answer: "hurrying"},
			{question: "agitato", answer: "agitated"},
			{question: "al, alla", answer: "to the, in the manner of"},
			{question: "allargando", answer: "broadening (getting slower and louder)"},
			{question: "allegretto", answer: "fairly fast (slower than allegro"}
		]
		this.answerOptions = ["A", "B", "C", "D", "E"]
		this.usedQuestionList = []
		this.currentQuetsionIdx = null
		this.currentAnswerIdxList = []
	} 

	getQuestionByIdx(idx) {
		return this.questionPool[idx].question
	}

	getAnswerByIdx(idx) {
		return this.questionPool[idx].answer
	}

	getAnswerOption(idx) {
		return this.answerOptions[idx]
	}

	pullQuestion() {
		this.currentQuestionIdx = null
		this.currentAnswerIdxList = []
		while (this.currentQuestionIdx == null || this.usedQuestionList.indexOf(this.currentQuestionIdx) != -1) {
			this.currentQuestionIdx = randomNumber(0, this.questionPool.length)
		}
		this.usedQuestionList.push(this.currentQuestionIdx)
		this.currentAnswerIdxList.push(this.currentQuestionIdx)
		console.log(`used question idx: ${this.usedQuestionList}`)
		return this.currentQuestionIdx
	}

	pickAnswer() {
		let idx = null
		while (idx == null || this.currentAnswerIdxList.indexOf(idx) != -1) {
			idx = randomNumber(0, this.questionPool.length)
		}
		return idx
	}

	pullAnswers(num) {
		while (this.currentAnswerIdxList.length < num) {
			this.currentAnswerIdxList.push(this.pickAnswer())
		}
		console.log(`answer idx: ${this.currentAnswerIdxList}`)
		return this.currentAnswerIdxList
	}
}
