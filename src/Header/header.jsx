import React from 'react';
import Clock from './Clock';

import './header.css';

import logo from './logo.svg';
import epam from './epam-logo.svg';

const Header = () => {
  return (
    <header className="Header">
      <div className="Logos">
        <img src={logo} className="React-logo" alt="logoReact" />
        <div className="Text-header-logoReact">
          {' '}
          <Clock />
        </div>
        <img src={epam} className="Epam-logo" alt="logoEpam" />
      </div>
    </header>
  );
};

export default Header;
