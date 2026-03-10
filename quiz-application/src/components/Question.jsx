import ProgressBar from "./ProgressBar"
import Answers from "./Answers"
import { useState } from "react"
import QUESTION from "../questions";

export default function Question({ onselectAnswer, onSkip, questionIndex }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }
    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTION[questionIndex].answers[0] === answer
            })

            setTimeout(() => {
                onselectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id="question">
            <ProgressBar key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkip : null} mode={answerState} />
            <h1 >{QUESTION[questionIndex].text}</h1>
            <Answers
                answers={QUESTION[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}