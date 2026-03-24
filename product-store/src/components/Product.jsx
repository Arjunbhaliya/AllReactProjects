import { useEffect } from "react"
import { useRef } from "react"
import classes from './Product.module.css'

export default function ProductModal({ item, open, setOpen }) {
    const dialog = useRef()
    console.log(item)

    useEffect(() => {
        if (open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [open])

    function handleClose() {
        setOpen(false)
    }

    return <>
        <dialog ref={dialog} className={classes.modal} >
            <div>
                <h1>{item.title}</h1>
                <h3>Brand : {item.brand}</h3>
                {item.images.map((img) => <img src={img} alt="Item image" className={classes.image} />)}
                <div>
                    <p>${item.price}</p>
                    <p>{item.description}</p>
                </div>
            </div>
            <button onClick={handleClose} className={classes.button}>
                close
            </button>
        </dialog>
    </>
}