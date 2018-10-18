import fs from "fs"
import path from "path"

interface Answer {
    answerText: string,
    correct: boolean
}

interface Question {
    id: number,
    question: string,
    answers: Answer[]
}

class Questions {
    private questions: Question[]

    constructor(questionsToUse?: Question[]) {
        if (!questionsToUse) {
            const questionsJSON = fs.readFileSync(path.resolve(__dirname, "questions.json"))
            this.questions = JSON.parse(questionsJSON.toString())
        } else {
            this.questions = questionsToUse
        }

    }

    /**
     * Returns the number of questions available
     */
    public getNumQuestions(): number {
        return this.questions.length
    }

    /**
     * Returns the Question object with the provided id
     * @param id Id of the question to return
     */
    public getQuestion(id: number): Question {
        for (const question of this.questions) {
            if (question.id === id) {
                return question
            }
        }
        throw Error("Invalid Question ID")
    }

    /**
     * Checks that the answer chosen for a given question is the correct one
     *
     * @param id id of the question which was answered
     * @param answerText text of the chosen answer
     */
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

export function createQuestions(questionsToUse: Question[]): Questions {
    return new Questions(questionsToUse)
}
