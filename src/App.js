import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [btnColor, setBtnColor] = useState('red');
  const btnText = btnColor === 'red' ? 'blue' : 'red' 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <button style={{ backgroundColor: btnColor }} onClick={() => {
            setBtnColor('blue');
          }}>Change to {btnText}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
