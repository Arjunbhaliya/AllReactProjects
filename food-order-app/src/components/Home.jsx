import { useEffect } from "react"
import Card from "./Card"
import { useState } from "react"
export default function Home() {
    const [loadedMeal, setLoadedMeal] = useState([])

    useEffect(() => {
        async function fetchMeals() {
            const responce = await fetch('http://localhost:3000/meals')
            if (!responce.ok) {

            }
            const meals = await responce.json()
            console.log(meals)
            setLoadedMeal(meals)
        }
        fetchMeals()
    }, [])

    return <ul id="meals">
        {loadedMeal.map((itme) =>
            <Card key={itme.id} meal ={itme} />
        )}
    </ul>
}