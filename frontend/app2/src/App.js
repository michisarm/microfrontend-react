import React from 'react';
import { Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import { createBrowserHistory } from 'history';
import './App.css';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <Router history={history}>
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.REACT_APP_2_HOST}${logo}`} className="App-logo" alt="logo" />
        <p>
          app2
        </p>
      </header>
    </div>
  </Router>
);

export default App;
