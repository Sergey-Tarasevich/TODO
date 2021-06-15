import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>Learn React and enjoy your new skills</div>

      <div>
        <a
          className="link-footer"
          href="https://ru.reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </footer>
  );
};

export default Footer;
