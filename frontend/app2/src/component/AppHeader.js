import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">App2-main</NavLink>
        </li>
        <li>
          <NavLink to="/sub1">App2-sub1</NavLink>
        </li>
        <li>
          <NavLink to="/sub2">App2-sub2</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;