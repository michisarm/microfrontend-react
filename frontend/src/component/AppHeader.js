import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>Microfrontend</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">App1</NavLink>
        </li>
        <li>
          <NavLink to="/app2">App2</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;