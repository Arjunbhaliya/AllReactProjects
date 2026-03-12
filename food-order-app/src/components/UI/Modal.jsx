import { useRef, useEffect } from "react";
import Button from "./Button";

export default function Modal({children , open}) {
    const dialog = useRef()
    
        useEffect(() => {
            if (open) {
                dialog.current.showModal()
            } else {
                dialog.current.close();
            }
        }, [open])
    
        return <dialog ref={dialog}>
            {children}
            <Button>Close</Button>
            <Button>Checkout </Button>
        </dialog>
}