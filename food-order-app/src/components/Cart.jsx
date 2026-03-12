import CartContext from '../store/CartContext'
import { useContext, useState } from 'react'
import Modal from "./UI/Modal"
import Button from './UI/Button'

export default function Cart({open ,setModal ,onCheckout}) {
    const cartCtx = useContext(CartContext)

    function handleClose(){
            setModal(false)
    }

    function handleCheckout(){
        onCheckout(true)
    }

    function handleIncrease(item){
        cartCtx.addItem(item)
    }

    function handleDecrease(id){
        cartCtx.removeItem(id)
    }

    const total = cartCtx.items.reduce( (totalPrice , item )=>{
        return totalPrice + item.price * item.quantity
    } , 0) 

    return <Modal className="cart" open={ open}>
        <h2>Your Cart</h2>
        <ul>{cartCtx.items.map((item) => (
            <li className='cart-item' key={item.id}>
                <p>{item.name} - {item.quantity} * {item.price}</p>
                <p className='cart-item-actions'>
                    <button onClick={()=>handleDecrease(item.id)}>-</button>
                    {item.quantity}
                    <button onClick={()=>handleIncrease(item)}>+</button>
                </p>
            </li>
        ))}</ul>
        <p className='cart-total'>${total}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleClose}>Close</Button>
            <Button onClick={()=>{handleCheckout() , handleClose()}}>Checkout </Button>
        </p>
    </Modal>
}