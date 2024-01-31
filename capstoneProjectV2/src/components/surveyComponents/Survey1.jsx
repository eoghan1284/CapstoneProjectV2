import React from 'react';
import './Survey.css'; 

function Survey1({ onNext }) { 
  // Component logic goes here

  // This function will be called when the next button is clicked
  const handleNextClick = () => {
    // Call the onNext prop, which is a function passed from the parent component
    onNext();
  };

  return (
    <div id="survey1Div_test">
      <h1>Survey 1</h1>
      {/* Include your survey questions here */}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Survey1;



