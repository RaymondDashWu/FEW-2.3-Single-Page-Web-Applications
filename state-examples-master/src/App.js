import React, { useState } from "react";
import "./App.css";

import SVG from "./components/SVG";

import Counter from "./components/Counter";

import Title from "./components/Title";


// change to class
function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {/* Counts in 1s */}
        {/* <Counter buttonText="Count" increment={1}/> */}
        {/* Counts in 5s */}
        {/* <Counter buttonText="Count" increment={5} /> */}
        {/* Counts in 3s */}
        {/* <Counter buttonText="Count" increment={3}/> */}
        <SVG />

        <div id="3buttons" >
          <h1>This section has 1 counter 3 buttons</h1>
          <Title text={state}/>
          {/* Counts in 1s */}
          <Counter buttonText="+" increment={1} total={state} updateTotal={setState}/>
          {/* Counts in 5s */}
          <Counter buttonText="+" increment={5} total={state} updateTotal={setState}/>
          {/* Counts in 3s */}
          <Counter buttonText="+" increment={3} total={state} updateTotal={setState}/>
          <SVG />
        </div>
      </header>
    </div>
  );
}

export default App;
