import { useEffect, useState } from "react"

export default function PrrogressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        console.log("interval")
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10)
        }, 10)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return <progress value={remainingTime} max={timer} />
}