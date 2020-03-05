import React from 'react'
import QuizData from "./QuizData.jsx"

export default class Quiz extends React.Component {
    constructor() {
        super()
        this.state = {
            userAnswer: null,
            currentQuestion: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true,
            score: 0
        }
    }

    loadQuiz() {
        const { currentQuestion } = this.state
        this.setState(() => {
            return {
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer
            }
        })
    }

    nextQuestionHandle() {
        const { userAnswer, answers, score } = this.state
        this.setState({ currentQuestion: this.state.currentQuestion + 1 })
        //console.log(this.state.currentQuestion)
        // increse score when answered correctly

        if (userAnswer === answers) {
            this.setState({ score: score + 1 })
        }

    }
    componentDidUpdate(prevProps, prevState) {
        const currentQuestion = this.state.currentQuestion
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    questions: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    answers: QuizData[currentQuestion].answer
                }
            })
        }
    }

    componentDidMount() {
        // console.log(QuizData)

        this.loadQuiz()
    }

    checkAnswer(answer) {
        // console.log(JSON.stringify(this.state.userAnswer) == answer? true: false)
        // console.log(typeof(answer) +" and " + answer)
        // console.log(typeof(JSON.stringify(this.state.userAnswer)) + " and " + this.state.userAnswer)
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    finishHandler() {
        console.log(this.state.currentQuestion + " and " + QuizData.length - 1)
        if (this.state.currentQuestion === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }

    render() {
        const { questions, options, currentQuestion, userAnswer, quizEnd } = this.state
        if (quizEnd) {
            return (
                <div>
                    <div class='container'>
                        <div class="card border-0 shadow my-5">
                            <div class="card-body p-5">
                                <h2 class='text-center'>Hết game rồi cưng!</h2>
                                <h2 class='text-center'>Final score: {this.state.score}</h2>
                                <p class='text-center'>The correct answers for the questions was: </p>
                                <ul>{QuizData.map((item, index) =>
                                    <li class='ui floating message options' key={index}>
                                        {item.answer}
                                    </li>
                                )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div class='container'>
                <div class="card border-0 shadow my-5">
                    <div class="card-body p-5">
                        <div class='text-center'>
                            <h2 class='questions'>{questions}</h2>
                            <span>Question {currentQuestion} out of {QuizData.length - 1}</span>
                            {options.map(option => (
                                <p key={option.id}
                                    class={`ui floating message options ${userAnswer === option ? "selected" : null}`}
                                    onClick={() => this.checkAnswer(option)}>
                                    {option}
                                </p>
                            ))}
                            {currentQuestion < QuizData.length - 1 ?
                                <button class='ui inverted button' disabled={this.state.disabled} onClick={this.nextQuestionHandle.bind(this)}>Next</button> :
                                <button class='ui inverted button' disabled={this.state.disabled} onClick={this.finishHandler.bind(this)}>Finish</button>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}