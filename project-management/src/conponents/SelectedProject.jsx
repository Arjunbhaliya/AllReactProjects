import Button from "./Button";
import { useRef } from "react";

export default function SelectedProject({ projects, id, remove, addTask, deleteTask, tasks }) {
    const task = useRef();
    const projectTask = tasks.filter((task) => task.projectId === id)
    const currProject = projects.find((pro) => pro.id === id);

    return (<div className="w-[35rem] mt-16">
        <header className=" pb-4 mb-4 border-b-2 border-stone-200">
            <div className="flex items-center justify-between" >
                <p className="text-3xl font-bold">Title : {currProject.title}</p>
                <Button onClick={() => remove(id)}>Delete</Button>
            </div>
            <p>Date : {currProject.dueDate}</p>
            <p className="whitespace-pre-wrap text-stone-700">Description : {currProject.description}</p>
        </header>

        <div>
            <h2 className="text-2xl">Task</h2>
            <section className="flex gap-6">
                <input ref={task} className="w-full mt-2 h-10 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                <Button className="p-2 px-5 rounded-lg my-2 justify-end bg-stone-700 text-white hover:bg-stone-600" onClick={() => { addTask(task.current.value, id), task.current.value = "" }}>Add</Button>
            </section>

            <ul >
                {projectTask.map((task) => {
                    return <li className="flex justify-between my-2" key={task.taskId}>{task.text}
                        <span>
                            <Button onClick={() => deleteTask(task.taskId)}>Clear</Button>
                        </span>
                    </li>
                })}
            </ul>

        </div>
    </div>
    );

}