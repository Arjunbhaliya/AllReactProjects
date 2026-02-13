import { useState } from 'react';

import ProjectField from './conponents/ProjectField';
import ProjectSidebar from './conponents/ProjectSidebar';
import Home from './conponents/home';

function App() {
  const [pr, setPr] = useState(false)
  function handleClick() {
    setPr(true)
  }
  return (
    <> <main className='flex' >
      <ProjectSidebar field={handleClick} />
      <div className=' w-full p-16' >
        {pr ?
          <ProjectField /> :
          <Home change={handleClick} />}
      </div>
    </main>
    </>
  );
}

export default App;
