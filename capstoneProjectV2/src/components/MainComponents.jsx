import React, { useState } from 'react';
import Welcome from './welcome/Welcome.jsx';
import Survey1 from './surveyComponents/Survey1.jsx';        
import Survey2 from './surveyComponents/Survey2.jsx';       
import Survey3 from './surveyComponents/Survey3.jsx'; 
import Game from './gameComponents/Game.jsx';
import Finish from './finish/Finish.jsx';
import '../styles/App.css';

const MainComponents = () => {
  const [currentStep, setCurrentStep] = useState('Welcome');

  // Handler to move to the next step
  const handleNext = (nextStep) => {
    setCurrentStep(nextStep);
  };

  // Determine which component to render based on the current step
  const renderStep = () => {
    switch (currentStep) {
      case 'Welcome':
        return <Welcome onStart={() => handleNext('Survey1')} />;
      case 'Survey1':
        return <Survey1 onNext={() => handleNext('Survey2')} />;
      case 'Survey2':
        return <Survey2 onNext={() => handleNext('Survey3')} />;
      case 'Survey3':
        return <Survey3 onNext={() => handleNext('Game')} />;
      case 'Game':
        return <Game onGameEnd={() => handleNext('Finish')} />;
      case 'Finish':
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
