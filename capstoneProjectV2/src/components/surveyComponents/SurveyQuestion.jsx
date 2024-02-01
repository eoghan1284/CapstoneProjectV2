import React from 'react';
import './SurveyQuestion.css'; 

const SurveyQuestion = ({ question }) => {
    return (
      <div className="question-container">
        <label className='questionLabel' htmlFor="rating">{ question }</label>
        <select id="rating" name="rating">
          <option value="0">0:Not at all sure</option>
          <option value="1">1:Several days</option>
          <option value="2">2:Over half the days</option>
          <option value="3">3:Nearly every day</option>
        </select>
    </div>
    );
  };
  
export default SurveyQuestion;











