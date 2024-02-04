import React, { useState } from 'react';
import './styles/Game.css'; 

function Game( {onGameEnd} ) {

  const [playerGold, setPlayerGold] = useState(100);
  const [probs] = useState([Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)]);
  console.log(probs)

  const handleGameEnd = () => {
    onGameEnd();
  };

  const winLoss = (prob) => {
    const randomNumber = Math.random();
    return randomNumber > prob ? -1 : 1;
  };  

  const handleCaveClick = (caveNum, result) => {
    updatePlayerGold(result);
    console.log(`cave ${caveNum} clicked: ${result}`);
  };  
  
  const updatePlayerGold = (res) => {
    setPlayerGold(prevCount => prevCount + res);
  };

  const Cave1 = () => {
    return (
      <div onClick={() => handleCaveClick(1, winLoss(probs[0]))} style={{ position: 'absolute', top: '70%', left: '2%', height: '10vh', width: '8vh', opacity: '0.5', backgroundColor: 'purple' }}></div>
    );
  }

  const Cave2 = () => {
    return (
      <div onClick={() => handleCaveClick(2, winLoss(probs[1]))} style={{ position: 'absolute', top: '55%', left: '12%', height: '9vh', width: '8vh', opacity: '0.5', backgroundColor: 'yellow' }}></div>
    );
  }

  const Cave3 = () => {
    return (
      <div onClick={() => handleCaveClick(3, winLoss(probs[2]))} style={{ position: 'absolute', top: '56%', left: '85%', height: '15vh', width: '8vh', opacity: '0.5', backgroundColor: 'red' }}></div>
    );
  }

return (
    <div id='gamePage'>
      <div className="parent">
        <Cave1></Cave1>
        <Cave2></Cave2>
        <Cave3></Cave3>
        <button onClick={handleGameEnd}>NextPage</button>
      </div>
      <div id='hudDiv'>
        <p>Gold</p>
        <p id='scoreDisplay'>{playerGold}</p>
      </div>
    </div>
  );
}

export default Game;