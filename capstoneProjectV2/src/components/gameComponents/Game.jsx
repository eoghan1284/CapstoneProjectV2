import React from 'react';
import './styles/Game.css'; 
import backgroundImage from './gameAssets/BackgroundSave1_2.png';
import Cave from './Cave.jsx'; //this import breaks welcome page????

function Game( {onGameEnd} ) {

  const handleGameEnd = () => {
    onGameEnd();
  };

  return (
    <div className="parent">
      <div className="child" id="child1"></div>
      <div className="child" id="child2"></div>
      <div className="child" id="child3"></div>
    </div>
  );
}

export default Game;