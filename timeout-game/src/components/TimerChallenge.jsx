import { useRef, useState } from "react"
import ResultModel from "./ResultModel"

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    // const [timeStart, setTimeStart] = useState(false)
    // const [tiemExpired, setTimeExpired] = useState(false)

    // function handleStart() {
    //     timer.current = setTimeout(() => { setTimeExpired(true);
    //         dialog.current.showModal() },
    //         targetTime * 1000)
    //     setTimeStart(true)
    // }
    // function handleStop() {
    //     clearTimeout(timer.current)
    //     setTimeStart(false)
    // }

    function handleStart() {
        timer.current = setInterval(() => setTimeRemaining((pretime) => (pretime - 10)),
            10)
    }
    function handleStop() {
        clearInterval(timer.current)
        dialog.current.showModal()
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }

    if (timeRemaining <= 0) {
        dialog.current.showModal()
        clearInterval(timer.current)
    }

    const timerActive = timeRemaining > 0 && timeRemaining < (targetTime * 1000)

    return <>
        <ResultModel ref={dialog} remainingTime={timeRemaining} Reset={handleReset} targetTime={targetTime} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={timerActive ? handleStop : handleStart}>{timerActive ? 'Stop' : 'Start'} Button</button>
            <p className={timerActive ? 'active' : undefined}>{timerActive ? ' Time is Running ' : 'timer inactive'}</p>
        </section>
    </>
}