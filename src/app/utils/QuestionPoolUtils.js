import { randomNumber } from "./NumberUtils"

export class QuestionPoolUtil {
	constructor() {
		this.questionPool = [
			{question: "accelerando, accel.", answer: "gradually getting faster"},
			{question: "adagio", answer: "slow"},
			{question: "allegretto", answer: "fairly fast (slower than allegro)"},
			{question: "allegro", answer: "lively, fast"},
			{question: "andante", answer: "at a walking speed"},
			{question: "lento", answer: "slow"},
			{question: "moderato", answer: "moderately"},
			{question: "rallentando (rall.)", answer: "gradually getting slower"},
			{question: "ritardando (ritard., rit.)", answer: "gradually getting slower"},
			{question: "ritenuto (riten., rit.)", answer: "held back"},
			{question: "tempo", answer: "speed, time (a tempo: in time)"},
			{question: "crescendo (cresc.)", answer: "gradually getting louder"},
			{question: "decrescendo (decresc.)", answer: "gradually getting softer"},
			{question: "f (forte)", answer: "loud"}, 
			{question: "ff (fortissimo)", answer: "very loud"},
			{question: "mf (mezzo forte)", answer: "moderately loud"},
			{question: "mp (mezzo piano)", answer: "moderately soft"},
			{question: "p (piano)", answer: "soft"},
			{question: "pp (pianissimo)", answer: "very soft"},
			{question: "cantabile", answer: "in a singing style"},
			{question: "da capo (D.C.)", answer: "repeat from the beginning"},
			{question: "dal segno (D.S.)", answer: "repeat from the sign S"},
			{question: "fine", answer: "the end"},
			{question: "legato", answer: "smoothly"},
			{question: "mezzo", answer: "half"},
			{question: "poco", answer: "a little"},
			{question: "staccato (stacc.)", answer: "detached"},
		]
		this.answerOptions = ["A", "B", "C", "D", "E"]
		this.usedQuestionList = []
		this.selectedAnswerList = []
		this.currentQuestionIdx = null
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

	getCurrentQuestionIdx() {
		return this.currentQuestionIdx
	}

	getCurrentAnswerIdxList() {
		return this.currentAnswerIdxList
	}

	getUsedQuestionList() {
		return this.usedQuestionList
	}

	getSelectedAnswerList() {
		return this.selectedAnswerList
	}

	clearUsedQuestionList() {
		this.usedQuestionList = []
	}

	clearSelectedAnswerList() {
		this.selectedAnswerList = []
	}

	addSelectedAnswerList(idx) {
		this.selectedAnswerList.push(idx)
	}

	pullQuestion() {
		this.currentQuestionIdx = null
		this.currentAnswerIdxList = []
		if (this.usedQuestionList.length == this.questionPool.length) {
			return -1;
		}
		while (this.currentQuestionIdx == null || this.usedQuestionList.indexOf(this.currentQuestionIdx) != -1) {
			this.currentQuestionIdx = randomNumber(0, this.questionPool.length)
		}
		this.usedQuestionList.push(this.currentQuestionIdx)
		this.currentAnswerIdxList.push(this.currentQuestionIdx)
		return this.currentQuestionIdx
	}

	pickAnswer() {
		let idx = null
		while (idx == null || this.currentAnswerIdxList.indexOf(idx) != -1) {
			idx = randomNumber(0, this.questionPool.length)
		}
		return idx
	}

	shuffleAnswer() {
		let shiftCount = randomNumber(0, this.currentAnswerIdxList.length)
		if (shiftCount > 0) {
			for (let i = 1; i <= shiftCount; i++) {
				let e = this.currentAnswerIdxList[0]
				this.currentAnswerIdxList.shift()
				this.currentAnswerIdxList.push(e)
			}
		}
	} 

	pullAnswers(num) {
		while (this.currentAnswerIdxList.length < num) {
			this.currentAnswerIdxList.push(this.pickAnswer())
		}
		this.shuffleAnswer()
		return this.currentAnswerIdxList
	}
}
