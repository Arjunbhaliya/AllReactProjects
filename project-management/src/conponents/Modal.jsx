import { createPortal } from 'react-dom'
import { useImperativeHandle, useRef } from 'react'
import Button from './Button';

export default function Modal({ children, ref, ...props }) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} {...props}>
            {children}
            <form method='dialog' className='text-right mt-6'>
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root'))
}