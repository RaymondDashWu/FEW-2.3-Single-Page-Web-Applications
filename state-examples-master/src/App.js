import React from "react";
import "./App.css";

import SVG from "./components/SVG";

import Counter from "./components/Counter";


// change to class
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Counts in 1s */}
        <Counter buttonText="Count" increment={1}/>
        {/* Counts in 5s */}
        <Counter buttonText="Count" increment={5} />
        {/* Counts in 3s */}
        <Counter buttonText="Count" increment={3}/>
        <SVG />

        <div id="3buttons">
          <h1>This section has 1 counter 3 buttons</h1>
          {/* Counts in 1s */}
          <Counter buttonText="+" increment={1}/>
          {/* Counts in 5s */}
          <Counter buttonText="+" increment={5} />
          {/* Counts in 3s */}
          <Counter buttonText="+" increment={3}/>
          <SVG />
        </div>
      </header>
    </div>
  );
}

export default App;
