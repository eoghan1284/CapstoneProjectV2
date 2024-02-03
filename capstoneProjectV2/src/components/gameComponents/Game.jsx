import React from 'react';
import './styles/Game.css'; 

function Game( {onGameEnd} ) {

  const handleGameEnd = () => {
    onGameEnd();
  };

  const handlePseudoCaveClick = () => {
    console.log("pseudo cave clicked");
  };

  const handleCaveClick = () => {
    console.log("cave clicked");
  };

  const Cave1 = () => {
    return (
      <div onClick={handleCaveClick} style={{ position: 'absolute', top: '70%', left: '2%', height: '10vh', width: '8vh', opacity: '0.5', backgroundColor: 'purple' }}></div>
    );
  }

  const Cave2 = () => {
    return (
      <div onClick={handleCaveClick} style={{ position: 'absolute', top: '55%', left: '12%', height: '9vh', width: '8vh', opacity: '0.5', backgroundColor: 'yellow' }}></div>
    );
  }

  const Cave3 = () => {
    return (
      <div onClick={handleCaveClick} style={{ position: 'absolute', top: '57%', left: '83%', height: '14vh', width: '9vh', opacity: '0.5', backgroundColor: 'red' }}></div>
    );
  }

  return (
      <div id='gamePage'>
        <div className="parent">
          <Cave1></Cave1>
          <Cave2></Cave2>
          <Cave3></Cave3>
        </div>
        <div id='hudDiv'>
          HUD
        </div>
      </div>
  );
}

export default Game;