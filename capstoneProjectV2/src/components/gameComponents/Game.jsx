import React from 'react';
import './styles/Game.css'; 
import backgroundImage from './gameAssets/BackgroundSave1_2.png';
import Cave from './Cave.jsx'; //this import breaks welcome page????

function Game( {onGameEnd} ) {

  const handleGameEnd = () => {
    onGameEnd();
  };

  return (
    <div id='page'>
      <div id='gameContainer'>
        <img src={backgroundImage} alt="Background" id="backgroundImage"/>
      </div>
      <Cave></Cave>
      <div id='HUD'>
        <button onClick={handleGameEnd}>Next</button>
      </div>
    </div>
  );
}

export default Game;