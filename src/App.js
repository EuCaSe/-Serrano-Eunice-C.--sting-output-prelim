import React from 'react';
import './App.css';

function App() {
  const message = "Hello, this is the output string!";

  return (
    <div className="App">
      <div className="App-header">
        <div className="output-box">
          <h1>{message}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
