import Input from "./Input";
import { useRef } from 'react'
import Modal from "./Modal";


export default function ProjectField({ onAdd, back }) {
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function saveProject() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open()
            return
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} className="backdrop:bg-stone-900/90 bg-purple-300 p-4  rounded-lg">
                <h1 className="my-8 text-center text-2xl font-bold">Invalid Input</h1>
                <p className="mt-2">You Entered wrong input or maybe any field is empty </p>
                <p className="mt-2">Please Enter the required details</p>
            </Modal>

            <div className=" w-[27rem]  mt-8">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={back} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={saveProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
                </menu>
                
                <div>
                    <Input ref={title} label='Title' />
                    <Input ref={description} label="Description" textarea />
                    <Input ref={dueDate} type="date" label="Due Date" />
                </div>
            </div>
        </>
    );
}