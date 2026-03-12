import Button from "./UI/Button"
import { useContext } from "react"
import CartContext from "../store/CartContext"

export default function Card( {meal}) {

    const cartCtx = useContext(CartContext)
    

    function handleAddItme() {
        console.log("object")
        cartCtx.addItem(meal)
    }

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="Meal Image" />
            <div>
                <h3>{meal.name}</h3>
                <h2 className="meal-item-price">${meal.price}</h2>
                <p className="meal-item-description">{meal.description} </p>
            </div>
            <p className="meal-item-actions">
                <Button className="button" onClick={handleAddItme}>Add To Cart</Button>
            </p>
        </article>


    </li>
}