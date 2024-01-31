import React from 'react';
import './styles/Game.css'; 

function Game( {onGameEnd} ) {

  const handleGameEnd = () => {
    onGameEnd();
  };

  return (
    <div id="testDiv">
      <h1>Game</h1>
      {}
      <button onClick={handleGameEnd}>Next</button>
    </div>
  );
}

export default Game;
