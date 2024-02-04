import React, { useState } from 'react';
import './styles/Game.css'; 
import goldCoin from './gameAssets/goldCoin.png';

function Game( {onGameEnd} ) {

  const [playerGold, setPlayerGold] = useState(100);
  const [probs] = useState([Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)]);
  console.log(probs);
  const [showCoin, setShowCoin] = useState({ cave1: false, cave2: false, cave3: false });


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
    setShowCoin(prev => ({ ...prev, [`cave${caveNum}`]: true }));
    setTimeout(() => {
      setShowCoin(prev => ({ ...prev, [`cave${caveNum}`]: false }));
    }, 1000);
  };  
  
  const updatePlayerGold = (res) => {
    setPlayerGold(prevCount => prevCount + res);
  };

  const Cave = ({ number }) => {
    const styles = {
      1: { top: '70%', left: '2%', height: '10vh', width: '8vh', backgroundColor: 'purple' },
      2: { top: '55%', left: '12%', height: '9vh', width: '8vh', backgroundColor: 'yellow' },
      3: { top: '57%', left: '85%', height: '14vh', width: '8vh', backgroundColor: 'red' },
    };
  
    const caveStyles = {
      position: 'absolute',
      opacity: '0.5',
      ...styles[number], 
    };
  
    return (
      <div onClick={() => handleCaveClick(number, winLoss(probs[number - 1]))} style={caveStyles}>
        {showCoin[`cave${number}`] && (
          <img src={goldCoin} alt="Gold coin" style={{ width: '100%', height: 'auto' }} />
        )}
      </div>
    );
  };

  return (
    <div id='gamePage'>
      <div className="parent">
        <Cave number={1}></Cave>
        <Cave number={2}></Cave>
        <Cave number={3}></Cave>
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