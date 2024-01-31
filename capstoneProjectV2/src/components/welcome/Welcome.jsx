import './Welcome.css'

const Welcome = ({ onStart }) => (
    <div id="Welcome_testDiv">
      <h1>Welcome</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
  
export default Welcome;