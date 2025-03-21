import React from "react";


function GameBoard({onSelectedSquare,board}){


  // const[gameBoard,setGameBoard] = useState(initialGameboard);

  // function handleCellClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) =>{
  //     const updatedGameBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;

  //   });

  //   onSelectedSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectedSquare(rowIndex,colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
