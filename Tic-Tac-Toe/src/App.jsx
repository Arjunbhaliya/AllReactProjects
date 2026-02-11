import { useState } from "react"
import BordGame from "./components/BordGame"
import Player from "./components/Player"
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./wining-combination";
import GameOver from "./components/GameOver";

const PLAYER = {
  X : 'PLAYER 1',
  O : 'PLAYER 2' 
}
const INITIAL_GAME_BOARD = [
  [null, null, null]
  , [null, null, null]
  , [null, null, null]
];


function derivedActivePlayer(gameTurn) {
  let currentPlayer = 'X'
  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function derivedWinner(gameState,players){
    let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameState[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameState[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameState[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner
}


function App() {

  const [players,setPlayers] = useState(PLAYER)
  // const [playerActive , setPlayerActive]=useState('X');
  const [gameTurn, setGameTurn] = useState([]);
  const playerActive = derivedActivePlayer(gameTurn);

  function handleRestart() {
    setGameTurn([])
  }

  function chnagePlayerName(symbol,newName){
    setPlayers( (prevPlayer) => {
      return  {
        ...prevPlayer , 
        [symbol] : newName
      }
    })
  }

  let gameState = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])];

  for (const turn of gameTurn) {
    const { square, player } = turn
    const { row, col } = square

    gameState[row][col] = player
  }

  const winner = derivedWinner(gameState,players )  

  let hasDraw = gameTurn.length === 9 && !winner;

  function handleSelect(rowIndex, colIndex) {
    // setPlayerActive((currentActive)=> currentActive === 'X' ? 'O' : 'X')
    setGameTurn((preTurn) => {
      const currentPlayer = derivedActivePlayer(preTurn)
      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...preTurn]
      return updatedTurn;
    })
  }

  return (

    <main >
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYER.X} symbol="X" isActive={playerActive === 'X'} onChangeName={chnagePlayerName}/>
          <Player name={PLAYER.O} symbol="O" isActive={playerActive === 'O'} onChangeName={chnagePlayerName}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} ></GameOver>}
        <BordGame onSelectSquar={handleSelect}
          board={gameState} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
