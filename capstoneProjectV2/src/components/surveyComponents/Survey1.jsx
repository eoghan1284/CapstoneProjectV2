import React from 'react';
import './Survey.css'; 
import {SurveyQuestionV1} from './SurveyQuestion.jsx';

function Survey1({ onNext }) { 
  // Component logic goes here

  // This function will be called when the next button is clicked
  const handleNextClick = () => {
    // Call the onNext prop, which is a function passed from the parent component
    onNext();
  };

  //below survey is the GAD-7 anxiety survey
  return (
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Survey (1/3)</h2>
          <h4>Over the last 2 weeks, how often have you been bothered by the following problems? </h4>
        </div>
        <div className='InputDiv'>
          <SurveyQuestionV1 question = "Feeling nervous, anxious, or on edge"/>
          <SurveyQuestionV1 question = "Not being able to stop or control worrying"/>
          <SurveyQuestionV1 question = "Worrying too much about different things"/>
          <SurveyQuestionV1 question= 'Trouble relaxing'/>
          <SurveyQuestionV1 question= 'Being so restless that it is hard to sit still'/>
          <SurveyQuestionV1 question= 'Becoming easily annoyed or irritable'/>
          <SurveyQuestionV1 question= 'Feeling afraid as if something awful might happen'/>
          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey1;



