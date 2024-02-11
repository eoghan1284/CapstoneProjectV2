import React, { useState, useEffect } from 'react';
import Welcome from './welcome/Welcome.jsx';
import Survey1 from './surveyComponents/Survey1.jsx';        
import Survey2 from './surveyComponents/Survey2.jsx';       
import Survey3 from './surveyComponents/Survey3.jsx'; 
import Game from './gameComponents/Game.jsx';
import Finish from './finish/Finish.jsx';
import '../styles/App.css';

const MainComponents = ({ gender, setGender, playerGold, setPlayerGold, total1, setTotal1, total2, setTotal2, total3, setTotal3, onFinished}) => {
  const [currentStep, setCurrentStep] = useState('Welcome');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentStep]);  //trigger scroll to top every time currentStep changes.

  const handleNext = (nextStep) => {
    setCurrentStep(nextStep);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'Welcome':
        return <Welcome onStart={() => handleNext('Survey1')} gender={gender} setGender={setGender}/>;
      case 'Survey1':
        return <Survey1 onNext={() => handleNext('Survey2')} total1={total1} setTotal1={setTotal1}/>;
      case 'Survey2':
        return <Survey2 onNext={() => handleNext('Survey3')} total2={total2} setTotal2={setTotal2}/>;
      case 'Survey3':
        return <Survey3 onNext={() => handleNext('Game')} total3={total3} setTotal3={setTotal3}/>;
      case 'Game':
        return <Game onGameEnd={() => handleNext('Finish')} playerGold={playerGold} setPlayerGold={setPlayerGold}/>;
      case 'Finish':
        onFinished();
        return <Finish/>;
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="main-components">
      {renderStep()}
    </div>
  );
};

export default MainComponents;
