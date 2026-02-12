

export default function BordGame({ onSelectSquar, board }) {


    // const [gameState , setGameState]=useState(intialGame);

    // function symbolChange(rowIndex,colIndex){
    //     setGameState((preGameBoard)=>{
    //         const updatedGame = [...preGameBoard.map((innerGame) =>[...innerGame])];
    //         updatedGame[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGame
    //     })

    //     onSelectSquar()
    // }

    return (

        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((Playersymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquar(rowIndex, colIndex)} disabled={Playersymbol !== null}>
                                    {Playersymbol}</button>
                            </li>))}
                    </ol>
                </li>))}
        </ol>

    );
}