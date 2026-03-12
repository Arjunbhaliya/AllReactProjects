import { useState , useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import Cart from './Cart';
import CartContext from '../store/CartContext';
import Checkout from './Checkout';

export default function Header() {

    const cartCtx = useContext(CartContext)

    const total =cartCtx.items.reduce((totalNumberOfItem, item) => { 
        return totalNumberOfItem + item.quantity
    } ,0)

    const [open, setOpen] = useState(false);
    const [checkout, setCheckout] = useState(false);

    console.log(checkout)
    function handleClick() {
        console.log("handle call")
        setOpen(true)
    }

    return <header id="main-header">
        <Checkout open={checkout}/>
        <Cart open={open } setModal={setOpen} onCheckout={setCheckout}/>
        <div id="title">
            <img src={logoImg} alt="Restaurant logo" />
            <h1>Restaurant</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleClick} > { `Cart (${total})`  }</Button>
        </nav>

    </header>
}