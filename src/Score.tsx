import React from 'react'

const Score = ({playerScore, playerScore2}) => {
  return (
    <div className="score">
        <div id="player-score">{playerScore}</div>
        <div id="computer-score">{playerScore2} </div>
      </div>
  )
}

export default Score