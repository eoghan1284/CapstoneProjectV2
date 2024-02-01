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
          <h2>Survey (1/3)</h2>
        </div>
        <div className='InputDiv'>
          <SurveyQuestion question = "Feeling nervous, anxious, or on edge"/>
          <SurveyQuestion question = "Not being able to stop or control worrying"/>
          <SurveyQuestion question = "Worrying too much about different things"/>
          <SurveyQuestion question= 'Trouble relaxing'/>
          <SurveyQuestion question= 'Being so restless that it is hard to sit still'/>
          <SurveyQuestion question= 'Becoming easily annoyed or irritable'/>
          <SurveyQuestion question= 'Feeling afraid as if something awful might happen'/>
          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey1;



