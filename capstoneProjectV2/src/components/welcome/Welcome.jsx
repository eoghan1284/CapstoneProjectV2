import React, { useState } from 'react';
import './Welcome.css';

const Welcome = ({ onStart }) => {

  const [gender, setGender] = useState('');
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleStart = () => {
    onStart(); //can pass gender here
  };

  return (
    <div id="page">
      <div id='container'>
        <div id='titleDiv'>
          <h2>Welcome</h2>
        </div>
        <div id='inputDiv'>
          <div id='expDiv'>
            <p>Over the course of this short activity, you will fill out 3 short surveys and then play a game. <br />
              Please enter your gender and press Start to begin.
            </p>
          </div>
          <select id='genderInput' name='Gender' value={gender} onChange={handleGenderChange} defaultValue="">
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
