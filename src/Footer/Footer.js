import React from 'react';
import './Footer.css';

//create Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div>Edit src/App.js and save to reload.</div>

      <div>
        {/* create click link to ru.reactjs.org */}
        <a
          className="link-footer"
          href="https://https://ru.reactjs.org/docs/getting-started.html"
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
