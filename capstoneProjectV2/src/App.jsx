import React, { useState } from 'react';
import MainComponents from './components/MainComponents';
import './styles/App.css';

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

const App = () => {
  const [gender, setGender] = useState('');
  const [playerGold, setPlayerGold] = useState(100);
  const [probs, setProbs] = useState(() => shuffleArray([0.25, 0.5, 0.75]));
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [choices, setChoices] = useState([]);
  const [results, setResults] = useState([]);

  const handleFinish = () => {
    console.log("Finished");
    console.log(gender);
    console.log(total1);
    console.log(total2);
    console.log(total3);
    console.log(probs);
    console.log(playerGold);
    console.log(choices);
    console.log(results);
    submitData();
  };

  const submitData = () => {
    const userData = {
      survey1Total: total1,
      survey2Total: total2,
      survey3Total: total3,
      probabilities: probs,
      choices:choices,
      results: results,
      finalGold: playerGold
    };

    // Send POST request to server
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
    });
  };

  return (
    <MainComponents 
      gender={gender} 
      setGender={setGender} 
      playerGold={playerGold} 
      setPlayerGold={setPlayerGold} 
      probs={probs}
      total1={total1} 
      setTotal1={setTotal1} 
      total2={total2} 
      setTotal2={setTotal2}
      total3={total3} 
      setTotal3={setTotal3}
      choices={choices}
      setChoices={setChoices}
      results={results} 
      setResults={setResults}
      onFinished={handleFinish}
    />
  );
};

export default App;
