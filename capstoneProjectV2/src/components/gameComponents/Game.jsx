import React from 'react';
import './styles/Game.css'; 
import backgroundImage from './gameAssets/BackgroundSave1_2.png';
import Cave from './Cave.jsx'; //this import breaks welcome page????

function Game( {onGameEnd} ) {

  const handleGameEnd = () => {
    onGameEnd();
  };

  const handlePseudoCaveClick = () => {
    console.log("pseudo cave clicked");
};

  return (
      <div className="parent">
        <div className="child" id="child1" onClick={handlePseudoCaveClick}></div>
        <div className="child" id="child2" onClick={handlePseudoCaveClick}></div>
        <div className="child" id="child3" onClick={handlePseudoCaveClick}></div>
      </div>
  );
}

export default Game;