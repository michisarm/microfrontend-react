import React from 'react';
import logo from '../logo.svg';

const AppMain = () => (
  <div className="App">
    <header className="App-header">
      <img src={`${process.env.REACT_APP_2_HOST}${logo}`} className="App-logo" alt="logo" />
      <p>
        app2
      </p>
    </header>
  </div>
);

export default AppMain;