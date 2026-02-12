import { useRef, useState } from "react"
import ResultModel from "./ResultModel"

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    const [timeStart, setTimeStart] = useState(false)
    const [tiemExpired, setTimeExpired] = useState(false)

    function handleStart() {
        timer.current = setTimeout(() => { setTimeExpired(true);
            dialog.current.showModal() },
            targetTime * 1000)
        setTimeStart(true)
        
    }
    function handleStop() {
        clearTimeout(timer.current)
        setTimeStart(false)
    }

    return <>
        <ResultModel ref={dialog} result="Lost" targetTime={targetTime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={timeStart ? handleStop : handleStart}>{timeStart ? 'Stop' : 'Start'} Button</button>
            <p className={timeStart ? 'active' : undefined}>{timeStart ? ' Time is Running ' : 'timer inactive'}</p>
        </section>
    </>
}