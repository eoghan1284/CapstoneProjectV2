import React from 'react';
import './Survey.css'; // Adjust the path as needed for your project structure
import { SurveyQuestionV1 } from './SurveyQuestion.jsx';

function Survey2({ onNext }) {
  
  const handleNextClick = () => {
    onNext();
  };

  //below questions are from PHQ-9
  //https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf
  return (
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Survey (2/3)</h2>
        </div>
        <div className='InputDiv'>
          <SurveyQuestionV1 question="Little interest or pleasure in doing things" />
          <SurveyQuestionV1 question="Feeling down, depressed, or hopeless" />
          <SurveyQuestionV1 question="Trouble falling or staying asleep, or sleeping too much" />
          <SurveyQuestionV1 question="Feeling tired or having little energyy" />
          <SurveyQuestionV1 question="Poor appetite or overeating" />
          <SurveyQuestionV1 question="Feeling bad about yourself or that you are a failure or have let yourself or your family down" />
          <SurveyQuestionV1 question="Trouble concentrating on things, such as reading the newspaper or watching television" />
          <SurveyQuestionV1 question=".Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual" />
          <SurveyQuestionV1 question="Thoughts that you would be better off dead, or of hurting yourself" />
          
          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey2;






