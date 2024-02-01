import './Welcome.css'

const Welcome = ({ onStart }) => (
    <div id="page">
      <div id='container'>
        <div id='titleDiv'>
          <h2>Signup</h2>
        </div>
        <div id ='inputDiv'>
          <input id='usernameInput' type="text" placeholder='Username'/>
          <select id='genderInput' name='Gender'>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button onClick={onStart}>Start</button>
        </div>
      </div>
    </div>
  );
  
export default Welcome;