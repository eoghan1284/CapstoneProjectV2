import React, { useState } from 'react';
import MainComponents from './components/MainComponents';
import './styles/App.css';

const App = () => {

  const [gender, setGender] = useState('');
  const [playerGold, setPlayerGold] = useState(100);
  const [probs] = useState([Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)]);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);

  const handleFinish = () => {
    console.log("Finished");
    console.log(gender)
    console.log(total1);
    console.log(total2);
    console.log(total3);
    console.log(probs);
    console.log(playerGold);
  };

  return <MainComponents 
  gender={gender} setGender={setGender} 
  playerGold={playerGold} setPlayerGold={setPlayerGold} 
  probs = {probs}
  total1={total1} setTotal1={setTotal1} 
  total2={total2} setTotal2={setTotal2}
  total3={total3} setTotal3={setTotal3}
  onFinished={handleFinish}
  />;
};

export default App;


/*
const submitData = () => {
  const userData = {
    username: username,
    probabilities: probs,
    choices: choices, // Add 100 choices
    outcomes: outcomes // Add 100 outcomes
  };

  //send POST request to server
  fetch('http://localhost:3000/observation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle server response
      console.log('Obs stored:' + data);
    })
    .catch(error => {
      console.error('Error storing obs:', error);
      return;
    });
};
*/
