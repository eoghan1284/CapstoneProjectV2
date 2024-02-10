import React from 'react';
import MainComponents from './components/MainComponents';
import './styles/App.css';

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
const App = () => {
  return <MainComponents />;
};

export default App;
