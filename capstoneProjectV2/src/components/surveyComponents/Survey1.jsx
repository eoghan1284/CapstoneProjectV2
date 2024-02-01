import React from 'react';
import './Survey.css'; 
import SurveyQuestion from './SurveyQuestion.jsx';

function Survey1({ onNext }) { 
  // Component logic goes here

  // This function will be called when the next button is clicked
  const handleNextClick = () => {
    // Call the onNext prop, which is a function passed from the parent component
    onNext();
  };

  return (
    <div className='Container'>
      <div className='TitleDiv'>
        <h2>Title</h2>
      </div>
      <div className='inputDiv'>
        <SurveyQuestion text = "good"/>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Survey1;



