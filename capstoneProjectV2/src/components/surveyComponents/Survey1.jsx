import React, { useState } from 'react';
import './Survey.css'; 
import {SurveyQuestionV1} from './SurveyQuestion.jsx';

function Survey1({ onNext, survey1Answers, setSurvey1Answers, total1, setTotal1}) { 
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
  const handleSelectChange = (event, questionKey) => {
    // Ensure we are working with the event and extracting value directly from the event
    const numericalValue = parseInt(event.target.value, 10);
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionKey]: numericalValue
    }));
  };

  const recordSurveyAnswers = () => {
    // Assuming survey1Answers has been initialized with useState
    const answersArray = Object.keys(responses).map(key => parseInt(responses[key], 10));
    setSurvey1Answers(answersArray);
  };

  // Function to calculate the total score
  const calculateTotalScore = () => {
    recordSurveyAnswers();
    return Object.values(responses).reduce((acc, curr) => {
      // If curr is an empty string, treat it as 0
      const currValue = curr === '' ? 0 : parseInt(curr, 10);
      return acc + currValue;
    }, 0);
  };
  

  // Check if all questions have been answered
  const allQuestionsAnswered = Object.values(responses).every(value => value !== '');

  // This function will be called when the next button is clicked
  const handleNextClick = () => {
    const totalScore = calculateTotalScore();
    // Update the total using setTotal1 
    setTotal1(totalScore);
    onNext(); // Proceed to the next step
  };

  //below survey is the GAD-7 anxiety survey
  return (
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Survey (1/3)</h2>
          <h4>Over the last 2 weeks, how often have you been bothered by the following problems?</h4>
        </div>
        <div className='InputDiv'>
          {/* Update the onChange handlers to correctly pass the event and question key */}
          <SurveyQuestionV1 question="Feeling nervous, anxious, or on edge" onChange={(e) => handleSelectChange(e, 'q1')} />
          <SurveyQuestionV1 question="Not being able to stop or control worrying" onChange={(e) => handleSelectChange(e, 'q2')} />
          <SurveyQuestionV1 question="Worrying too much about different things" onChange={(e) => handleSelectChange(e, 'q3')} />
          <SurveyQuestionV1 question="Trouble relaxing" onChange={(e) => handleSelectChange(e, 'q4')} />
          <SurveyQuestionV1 question="Being so restless that it is hard to sit still" onChange={(e) => handleSelectChange(e, 'q5')} />
          <SurveyQuestionV1 question="Becoming easily annoyed or irritable" onChange={(e) => handleSelectChange(e, 'q6')} />
          <SurveyQuestionV1 question="Feeling afraid as if something awful might happen" onChange={(e) => handleSelectChange(e, 'q7')} />
          <div className='ButtonDiv'>
            {/* Disable the Next button if not all questions have been answered */}
            <button onClick={handleNextClick} disabled={!allQuestionsAnswered}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey1;
