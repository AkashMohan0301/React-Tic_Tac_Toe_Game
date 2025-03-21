import React from 'react'

const GameOver = ({winner,onRematch}) => {
  return (
    <div id="game-over">
        <h2>Game Over</h2>
        <p>{winner ? `${winner} Won!` : "It's a Draw"}</p>
        <p><button onClick={onRematch}>Rematch</button></p>
    </div>
  )
}

export default GameOver
