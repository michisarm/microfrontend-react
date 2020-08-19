import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.REACT_APP_1_HOST}${logo}`} className="App-logo" alt="logo" />
        <p>app1</p>
      </header>
    </div>
  );
}

export default App;
