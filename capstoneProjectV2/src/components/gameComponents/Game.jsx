import React, { useState } from 'react';
import './styles/Game.css'; 
import goldCoin from './gameAssets/goldCoin.png';
import goblin from './gameAssets/goblin.png'

function Game( {onGameEnd} ) {

  const [playerGold, setPlayerGold] = useState(100);
  const [probs] = useState([Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)]);
  console.log(probs);
  const [showCoin, setShowCoin] = useState({ cave1: false, cave2: false, cave3: false });
  const [showGoblin, setShowGoblin] = useState({ cave1: false, cave2: false, cave3: false });
  const [showInfo, setShowInfo] = useState(true);
  const [trialNum, updateTrialNum] = useState(0);
  
  const incrementTrialNum = () => {
    updateTrialNum(prevNum => prevNum + 1);
  };

  const handleGameEnd = () => {
    onGameEnd();
  };

  const handleOkClick = () => {
    setShowInfo(false);
  };

  const winLoss = (prob) => {
    const randomNumber = Math.random();
    return randomNumber > prob ? -1 : 1;
  };  

  const handleCaveClick = (caveNum) => {
    incrementTrialNum();
    const result = winLoss(probs[caveNum - 1]);
    updatePlayerGold(result);
    console.log(`cave ${caveNum} clicked: ${result}`);
    if (result === 1) {
      setShowGoblin({ ...showGoblin, [`cave${caveNum}`]: false })
      setShowCoin({ ...showCoin, [`cave${caveNum}`]: true });
      setTimeout(() => setShowCoin({ ...showCoin, [`cave${caveNum}`]: false }), 1000);
    } else if (result === -1) {
      setShowCoin({ ...showCoin, [`cave${caveNum}`]: false })
      setShowGoblin({ ...showGoblin, [`cave${caveNum}`]: true });
      setTimeout(() => setShowGoblin({ ...showGoblin, [`cave${caveNum}`]: false }), 1000);
    }
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
        {showGoblin[`cave${number}`] && (
          <img src={goblin} alt="Goblin" style={{ width: '100%', height: 'auto' }} />
        )}
      </div>
    );
  };

  return (
    <div id='gamePage'>
      <div id='infoContainer' style={{ display: showInfo ? 'block' : 'none' }}> 
        <div id='infoTitleDiv'>
          <h2>Info</h2>
        </div>
        <div id='info_Div'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ratione, sit ad sapiente a quia in ab maiores aperiam repellat?</p>
          <div id='buttonDiv'>
            <button id='okayBtn' onClick={handleOkClick}>Ok</button>
          </div>
        </div>
      </div>
      <div className="parent">
        <Cave number={1}></Cave>
        <Cave number={2}></Cave>
        <Cave number={3}></Cave>
        <button onClick={handleGameEnd}>NextPage</button>
        <p>Trial Num: {trialNum}</p>
      </div>
      <div id='hudDiv'>
        <p id='scoreDisplay'>{playerGold}</p>
      </div>
    </div>
  );
}

export default Game;