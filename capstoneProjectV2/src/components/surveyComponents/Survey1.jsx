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
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Title</h2>
        </div>
        <div className='InputDiv'>
          <SurveyQuestion question = "Question1 text?"/>
          <SurveyQuestion question = "Question2 text?"/>
          <SurveyQuestion question = "Question3 text?"/>
        </div>
        <div className='ButtonDiv'>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Survey1;



