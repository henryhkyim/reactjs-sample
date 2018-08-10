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
		this.usedQuestionList = []
		this.currentQuestion = null;
	} 

	pullRandomQuestion() {
		while (this.currentQuestion == null || this.usedQuestionList.indexOf(this.currentQuestion) != -1) {
			this.currentQuestion = randomNumber(0, this.questionPool.length)
		}
		this.usedQuestionList.push(this.currentQuestion)
		console.log(this.usedQuestionList)
		return this.questionPool[this.currentQuestion]
	}

	pullAnswers(num) {
		return []
	}

}
