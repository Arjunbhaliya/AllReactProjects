import Button from "./Button";

export default function ProjectSidebar({ field }) {

    return (
        <aside>
            <div className='mt-16 w-1/3 md:w-72 bg-slate-800 h-screen p-16 text-white rounded-r-xl'>
                <main >
                    <h2 className="text-2xl font-bold text-stone-50 my-4">Your Project</h2>
                    <Button onClick={field}>  + Add Project</Button>
                </main>
            </div>
        </aside>
    );
}