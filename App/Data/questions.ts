import fs from "fs"
import path from "path"

interface Answer {
    answerText: string,
    correct: boolean
}

interface Question {
    id: number,
    question: string,
    answers: [Answer]
}

class Questions {
    private questions: [Question]

    constructor() {
        const questionsJSON = fs.readFileSync(path.resolve(__dirname, "questions.json"))
        this.questions = JSON.parse(questionsJSON.toString())
    }

    public getQuestion(id: number): Question {
        for (const question of this.questions) {
            if (question.id === id) {
                return question
            }
        }
        throw Error("Invalid Question ID")
    }

    public isCorrectAnswer(id: number, answerText: string): boolean {
        for (const question of this.questions) {
            for (const answer of question.answers) {
                if (answer.answerText === answerText) {
                    return answer.correct
                }
            }
        }

        throw Error("Invalid Answer")
    }
}

export const questions = new Questions()
