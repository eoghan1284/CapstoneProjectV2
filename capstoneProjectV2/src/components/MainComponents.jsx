import React, { useState } from 'react';
import Welcome from './welcome/Welcome.jsx';
import Survey1 from './surveyComponents/Survey1.jsx';        
import Survey2 from './surveyComponents/Survey2.jsx';       
import Survey3 from './surveyComponents/Survey3.jsx'; 
import Game from './gameComponents/Game.jsx';
import '../styles/App.css';

const MainComponents = () => {
  //const [currentStep, setCurrentStep] = useState('Welcome');
  // ... rest of your state and handlers

  // ... rest of your component with conditional rendering
  return Welcome;
};

export default MainComponents;
