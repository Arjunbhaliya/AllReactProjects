import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import CounterConfigration from './components/CounterConfigration.jsx';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function handleOnSet(newCount) {
    setChosenCount(newCount)
  }

  return (
    <>
      <Header />
      <main>
        <CounterConfigration onSet={handleOnSet} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
