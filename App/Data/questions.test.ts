import { createQuestions } from "./questions"

const testQuestions = [
    {
        id: 0,
        question: "TestQ1",
        answers: [
            {
                answerText: "CorrectAnswer",
                correct: true,
            },
            {
                answerText: "WrongAnswer1",
                correct: false,
            },
            {
                answerText: "WrongAnswer2",
                correct: false,
            },
            {
                answerText: "WrongAnswer3",
                correct: false,
            },
        ],
    },
    {
        id: 1,
        question: "TestQ2",
        answers: [
            {
                answerText: "CorrectAnswer",
                correct: true,
            },
            {
                answerText: "WrongAnswer1",
                correct: false,
            },
            {
                answerText: "WrongAnswer2",
                correct: false,
            },
            {
                answerText: "WrongAnswer3",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        question: "TestQ3",
        answers: [
            {
                answerText: "CorrectAnswer",
                correct: true,
            },
            {
                answerText: "WrongAnswer1",
                correct: false,
            },
            {
                answerText: "WrongAnswer2",
                correct: false,
            },
            {
                answerText: "WrongAnswer3",
                correct: false,
            },
        ],
    },
]
const questions = createQuestions(testQuestions)

test("Get question returns correct question", () => {
    expect(questions.getQuestion(2)).toBe(testQuestions[2])
})

test("Get question with invalid id throws", () => {
    expect(() => {
        questions.getQuestion(5)
    }).toThrow()
})

test("Checking answer returns true when correct answer provided", () => {
    expect(questions.isCorrectAnswer(1, "CorrectAnswer")).toBe(true)
})

test("Checking answer returns false when incorrect answer provided", () => {
    expect(questions.isCorrectAnswer(1, "WrongAnswer1")).toBe(false)
})

test("Get Num Questions actually returns the correct number", () => {
    expect(questions.getNumQuestions()).toBe(testQuestions.length)
})
