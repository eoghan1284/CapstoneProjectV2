import React from 'react';
import './styles/Game.css'; 

function Game( {onGameEnd} ) {

  const handleGameEnd = () => {
    onGameEnd();
  };

  return (
    <div>
      <div id='testDiv'>
        
      </div>
      <button onClick={handleGameEnd}>Next</button>
    </div>
  );
}

export default Game;


