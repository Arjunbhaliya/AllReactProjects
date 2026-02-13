import Button from "./Button";
import img from '../assets/no-projects.png'

export default function Home({ change }) {
    return (
        <div className='text-center gap-50  w-[100%] '>
            <img className="w-16 h-16 object-contain mx-auto" src={img} alt='Project logo' />
            <h1 className="my-8 text-center text-2xl font-bold">No Project Selected</h1>
            <p className="flex flex-col gap-1 my-4"> Select a Project or Get start with new one</p>
            <Button onClick={change}>Create new project</Button>
        </div>
    );
}