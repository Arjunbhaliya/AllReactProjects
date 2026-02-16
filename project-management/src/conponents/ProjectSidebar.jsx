import Button from "./Button";

export default function ProjectSidebar({ field , project ,select}) {

    return (
        <aside>
            <div className='mt-16 w-1/3 md:w-72 bg-slate-800 h-screen p-16 text-white rounded-r-xl'>
                <main >
                    <h2 className="text-2xl font-bold text-stone-50 my-4">Your Project</h2>
                    <Button onClick={field}>  + Add Project</Button>
                </main>
                    <ul className="mt-10">
                       {project.map((pro)=> <li key={pro.id}>
                        <button onClick={()=>select(pro.id)} className="w-full text-left px-2 py-1 rounded-sm  hover:text-stone-200 hover:bg-stone-600">{pro.title}</button>
                       </li>)}
                    </ul>
                
            </div>

        </aside>
    );
}