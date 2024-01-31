import React from 'react';
import './Survey.css'; // Adjust the path as needed for your project structure

function Survey2({ onNext }) {
  
  const handleNextClick = () => {
    onNext();
  };

  return (
    <div id="survey2Div_test">
      <h1>Survey 2</h1>
      {/* Include your survey questions here */}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Survey2;






