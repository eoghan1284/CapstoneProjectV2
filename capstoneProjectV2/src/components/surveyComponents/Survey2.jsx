import React, { useState } from 'react';
import './Survey.css'; // Adjust the path as needed for your project structure
import { SurveyQuestionV1 } from './SurveyQuestion.jsx';

function Survey2({ onNext }) {
  const [responses, setResponses] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: ''
  });


  const handleSelectChange = (value, questionKey) => {
    const numericalValue = parseInt(value, 10);
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionKey]: numericalValue
    }));
  };


  const calculateTotalScore = () => {
    return Object.values(responses)
      .map(val => parseInt(val, 10) || 0) // Convert to integer, default to 0 if NaN
      .reduce((acc, curr) => acc + curr, 0);
  };
  


  const handleNextClick = () => {
    const totalScore = calculateTotalScore();
    console.log('Survey2 total:', totalScore);
    onNext(); // Proceed to the next step
  };

  //below survey is PHQ-9
  //https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf
  return (
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Survey (2/3)</h2>
          <h4>Over the past 2 weeks, how often have you been bothered by the following problems?</h4>
        </div>
        <div className='InputDiv'>
          <SurveyQuestionV1 question="Little interest or pleasure in doing things" 
           onChange={(e) => handleSelectChange(e.target.value, 'q1')}
          />
          <SurveyQuestionV1 question="Feeling down, depressed, or hopeless" onChange={(e) => handleSelectChange(e.target.value, 'q2')}/>
          <SurveyQuestionV1 question="Trouble falling or staying asleep, or sleeping too much" onChange={(e) => handleSelectChange(e.target.value, 'q3')}/>
          <SurveyQuestionV1 question="Feeling tired or having little energyy" onChange={(e) => handleSelectChange(e.target.value, 'q4')}/>
          <SurveyQuestionV1 question="Poor appetite or overeating" onChange={(e) => handleSelectChange(e.target.value, 'q5')}/>
          <SurveyQuestionV1 question="Feeling bad about yourself or that you are a failure or have let yourself or your family down" onChange={(e) => handleSelectChange(e.target.value, 'q6')}/>
          <SurveyQuestionV1 question="Trouble concentrating on things, such as reading the newspaper or watching television" onChange={(e) => handleSelectChange(e.target.value, 'q7')}/>
          <SurveyQuestionV1 question=".Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual" onChange={(e) => handleSelectChange(e.target.value, 'q8')}/>
          <SurveyQuestionV1 question="Thoughts that you would be better off dead, or of hurting yourself" onChange={(e) => handleSelectChange(e.target.value, 'q9')}/>
          
          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey2;






