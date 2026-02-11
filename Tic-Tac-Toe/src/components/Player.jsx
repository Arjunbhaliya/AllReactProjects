import { useState } from "react"

export default function Player({ name, symbol ,isActive , onChangeName}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function clickHandler() {
        setIsEditing(editing => !editing)
        if(isEditing){
            onChangeName(symbol,playerName)
        }
    }

    function handleChange(event) {
        console.log(event.target)
        setPlayerName(event.target.value)
    }

    let editplayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editplayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (

        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editplayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}