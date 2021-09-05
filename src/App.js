import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [isDisabled, setIsDiabled] = useState(false);
  const btnText = btnColor === "red" ? "blue" : "red";

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
          <label htmlFor="toggle-button">
            Disable button
            <input
              id="toggle-button"
              type="checkbox"
              defaultChecked={isDisabled}
              aria-checked={isDisabled}
              onChange={(e) => setIsDiabled(e?.target?.checked)}
            />
          </label>

          <button
            style={{
              color: "whitesmoke",
              backgroundColor: isDisabled ? "gray" : btnColor,
            }}
            disabled={isDisabled}
            onClick={() => {
              setBtnColor("blue");
            }}
          >
            Change to {btnText}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
