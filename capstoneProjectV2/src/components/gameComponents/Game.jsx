import React from 'react';
import './styles/Game.css'; 
import backgroundImage from './/gameAssets/BackgroundV1.png';


function Game( {onGameEnd} ) {

  const handleGameEnd = () => {
    onGameEnd();
  };

  return (
    <div id='page'>
      <div id='gameContainer'>
        <img src={backgroundImage} alt="Background" id="backgroundImage"/>
      </div>
      <div id='HUD'>
        <button onClick={handleGameEnd}>Next</button>
      </div>
    </div>
  );
}

export default Game;