import React from 'react';
import './Survey.css'; // Adjust the path as needed for your project structure
import { SurveyQuestionV2 } from './SurveyQuestion.jsx';

function Survey2({ onNext }) {
  
  const handleNextClick = () => {
    onNext();
  };
 
  //below survey is the OCI from Veale.co.uk
  return (
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Survey (3/3)</h2>
          <h4>The following statements refer to experiences which many people have in their everday lives. Select the option that best describes how much each experience has distressed or bothered you over the last 2 weeks.</h4>
        </div>
        <div className='InputDiv'>
          <SurveyQuestionV2 question="Unpleasant thoughts come into my mind against my will and I cannot get rid of them" />
          <SurveyQuestionV2 question="I think contact with bodily secretions (perspiration, saliva, blood, urine, etc.) may contaminate my clothes or somehow harm me" />
          <SurveyQuestionV2 question="I ask people to repeat things to me several times, even though I understood them the first time" />
          <SurveyQuestionV2 question="I wash and clean obsessively" />
          <SurveyQuestionV2 question="I have to review mentally past events, conversations and actions to make sure that I didn't do something wrong" />
          <SurveyQuestionV2 question="I have saved up so many things that they get in the way" />
          <SurveyQuestionV2 question="I check things more often than necessary" />
          <SurveyQuestionV2 question="I avoid using public toilets because I am afraid of disease or contamination" />
          <SurveyQuestionV2 question="I repeatedly check doors, windows, drawers etc." />
          <SurveyQuestionV2 question="I repeatedly check gas and water taps and light switches after turning them off" />
          <SurveyQuestionV2 question="I collect things I don't need" />
          <SurveyQuestionV2 question="I have thoughts of having hurt someone without knowing it" />
          <SurveyQuestionV2 question="I have thoughts that I might want to harm myself or others" />
          <SurveyQuestionV2 question="I get upset if objects are not arranged properly" />
          <SurveyQuestionV2 question="I feel obliged to follow a particular order in dressing, undressing and washing myself" />
          <SurveyQuestionV2 question="I feel compelled to count while I am doing things" />
          <SurveyQuestionV2 question="I am afraid of impulsively doing embarrassing or harmful things" />
          <SurveyQuestionV2 question="I need to pray to cancel bad thoughts or feelings" />
          <SurveyQuestionV2 question="I keep on checking forms or other things I have written" />
          <SurveyQuestionV2 question="I get upset at the sight of knives, scissors and other sharp objects in case I lose control with them" />
          <SurveyQuestionV2 question="I am excessively concerned about cleanliness" />
          <SurveyQuestionV2 question="I find it difficult to touch an object when I know it has been touched by strangers or certain people" />
          <SurveyQuestionV2 question="I need things to be arranged in a particular order" />
          <SurveyQuestionV2 question="I get behind in my work because I repeat things over and over again" />
          <SurveyQuestionV2 question="I feel I have to repeat certain numbers" />
          <SurveyQuestionV2 question="After doing something carefully, I still have the impression I have not finished it" />
          <SurveyQuestionV2 question="I find it difficult to touch garbage or dirty things" />
          <SurveyQuestionV2 question="I find it difficult to control my own thoughts" />
          <SurveyQuestionV2 question="I have to do things over and over again until it feels right" />
          <SurveyQuestionV2 question="I am upset by unpleasant thoughts that come into my mind against my will" />
          <SurveyQuestionV2 question="Before going to sleep I have to do certain things in a certain way" />
          <SurveyQuestionV2 question="I go back to places to make sure that I have not harmed anyone" />
          <SurveyQuestionV2 question="I frequently get nasty thoughts and have difficulty in getting rid of them" />
          <SurveyQuestionV2 question="I avoid throwing things away because I am afraid I might need them later" />
          <SurveyQuestionV2 question="I get upset if others change the way I have arranged my things" />
          <SurveyQuestionV2 question="I feel that I must repeat certain words or phrases in my mind in order to wipe out bad thoughts, feelings or actions" />
          <SurveyQuestionV2 question="After I have done things, I have persistent doubts about whether I really did them" />
          <SurveyQuestionV2 question=" I sometimes have to wash or clean myself simply because I feel contaminated" />
          <SurveyQuestionV2 question="I feel that there are good numbers and bad numbers" />
          <SurveyQuestionV2 question="I repeatedly check anything which might cause a fire" />
          <SurveyQuestionV2 question="Even when I do something very carefully I feel that it is not quite right" />
          <SurveyQuestionV2 question="I wash my hands more often or longer than necessary" />

          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey2;






