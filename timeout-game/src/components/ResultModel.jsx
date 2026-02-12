export default function ResultModel({ref , result , targetTime}){
        return (
            <dialog ref={ref} className="result-modal" > 
                <h2>You {result}</h2>
                <p>
                    The Targeted Time was <strong>{targetTime} seconds.</strong>
                </p>
                <p>
                    The stoped time is <strong> X seconds. left</strong>
                </p>
                <form method="dialog">
                    <button>Close</button>
                </form>
                
            </dialog>
        );
}