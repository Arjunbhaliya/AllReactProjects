import { useState, useCallback } from "react"
import QUESTIONS from '../questions'
import Question from "./Question"
import Summary from "./Summary"

export default function Quiz() {
    const [userAnswer, setUsertAnswer] = useState([])
    console.log(userAnswer)
    const selectedQuestionIndex = userAnswer.length;
    const quizFinish = selectedQuestionIndex === QUESTIONS.length

    const handleOnclick = useCallback(function handleOnclick(selectedAnswer) {
        setUsertAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer]
        })
    }, [])

    const handleSkip = useCallback(() => { handleOnclick(null) }, [handleOnclick])
    if (quizFinish) {
        return <Summary userAnswers={userAnswer}/>
    }

    return <div id="quiz">
        <Question
            key={selectedQuestionIndex}
            questionIndex={selectedQuestionIndex}
            onselectAnswer={handleOnclick}
            onSkip={handleSkip}
        />
    </div>
}