import { useRef, useEffect } from "react";
import { createPortal} from 'react-dom'
import Button from "./Button";

export default function Modal({children , open}) {
    const dialog = useRef()
    
        useEffect(() => {
            if (open) {
                dialog.current.showModal()
            } else {
                dialog.current.close();
            }
            console.log(open)
        }, [open])

        
    
        return createPortal(
            <dialog ref={dialog} className="modal">
            {children}         
        </dialog>
        , document.getElementById('modal'))
}