import React, { useState } from 'react';
import './Survey.css'; 
import {SurveyQuestionV1} from './SurveyQuestion.jsx';

function Survey1({ onNext }) { 
  const [responses, setResponses] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: ''


  });

  // Function to update the state when an option is selected
  const handleSelectChange = (value, questionKey) => {
    const numericalValue = parseInt(value, 10);
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionKey]: numericalValue
    }));
  };

  // Function to calculate the total score
  const calculateTotalScore = () => {
    return Object.values(responses)
      .map(val => parseInt(val, 10) || 0) // Convert to integer, default to 0 if NaN
      .reduce((acc, curr) => acc + curr, 0);
  };
  

  // This function will be called when the next button is clicked
  const handleNextClick = () => {
    const totalScore = calculateTotalScore();
    console.log('Survey1 total:', totalScore);
    onNext(); // Proceed to the next step
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
        <SurveyQuestionV1 question="Feeling nervous, anxious, or on edge" 
          onChange={(e) => handleSelectChange(e.target.value, 'q1')}
        />
        <SurveyQuestionV1 question="Not being able to stop or control worrying" 
          onChange={(e) => handleSelectChange(e.target.value, 'q2')}
        />
        <SurveyQuestionV1 question="Worrying too much about different things" 
          onChange={(e) => handleSelectChange(e.target.value, 'q3')}
        />
        <SurveyQuestionV1 question="Trouble relaxing" 
          onChange={(e) => handleSelectChange(e.target.value, 'q4')}
        />
        <SurveyQuestionV1 question="Being so restless that it is hard to sit still" 
          onChange={(e) => handleSelectChange(e.target.value, 'q5')}
        />
        <SurveyQuestionV1 question="Becoming easily annoyed or irritable" 
          onChange={(e) => handleSelectChange(e.target.value, 'q6')}
        />
        <SurveyQuestionV1 question="Feeling afraid as if something awful might happen" 
          onChange={(e) => handleSelectChange(e.target.value, 'q7')}
/>
          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey1;



