import { useState, useRef } from 'react';

import ProjectField from './conponents/ProjectField';
import ProjectSidebar from './conponents/ProjectSidebar';
import Home from './conponents/home';
import SelectedProject from './conponents/SelectedProject';



function App() {
  let genId = useRef(-1)

  const [projectState, setProjectState] = useState({
    projectId: undefined,
    projects: [],
    tasks: []
  })

  function handleToAdd() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: genId.current += 0.5
      };
      return {
        ...prevState,
        projectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleBack() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: undefined
      }
    })
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: id
      }
    })
  }


  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
        projects: [...prevState.projects.filter((pro) => pro.id !== id)]
      }
    })
  }

  function handleAddTask(task, id) {
    if (task.trim() === '') return
    setProjectState((prevState) => {
      const newTask = {
        text: task,
        projectId: id,
        taskId: Math.random()
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: prevState.projectId,
        tasks: [...prevState.tasks.filter((task) => task.taskId !== id)]
      }
    })
  }


  console.log(projectState)

  let content;

  if (projectState.projectId === undefined) {
    content = <Home change={handleToAdd} />
  } else if (projectState.projectId === null) {
    content = <ProjectField onAdd={handleAddProject} back={handleBack} />
  } else {
    content = <SelectedProject projects={projectState.projects} id={projectState.projectId} remove={handleDeleteProject} addTask={handleAddTask} deleteTask={handleDeleteTask} tasks={projectState.tasks} />
  }
  console.log(projectState.projectId)


  return (
    <> <main className='flex gap-8 w-full my-8' >
      <ProjectSidebar field={handleToAdd} project={projectState.projects} select={handleSelectedProject} />
      {content}

    </main>
    </>
  );
}


export default App;
