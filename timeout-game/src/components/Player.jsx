import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState()
  const playername = useRef();


  function handleClick() {
    setName(playername.current.value)
    playername.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'user'}</h2>
      <p>
        <input ref={playername} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
