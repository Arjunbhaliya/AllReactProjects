import { createPortal } from 'react-dom'

export default function ResultModel({ ref, remainingTime, targetTime, Reset }) {
    const formatedTime = (remainingTime / 1000).toFixed(2)
    const Lost = remainingTime <= 0;
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    return (createPortal(
        <dialog ref={ref} className="result-modal" onClose={Reset} >
            {Lost ? <h2>You lost</h2> : <h2>Your Score : {score}</h2>}
            <p>
                The Targeted Time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                The stoped time is <strong> {formatedTime} seconds. left</strong>
            </p>
            <form method="dialog" onSubmit={Reset}>
                <button>Close</button>
            </form>

        </dialog>,
        document.getElementById('modal'))
    );
}