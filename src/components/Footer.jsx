import React from "react";
import './Footer.css';
import insta from './assets/instagram.png';
import LinkedIn from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import myImage from './assets/E-cell-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="connect-section">
          <h2 className="footer-heading">Connect with us</h2>
          <div className="social-icons">
            <a
              href="https://www.instagram.com" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <img src={insta} alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="https://www.twitter.com" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <img src={twitter} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-logo-section">
          <img src={myImage} alt="E-Cell SRMIST Logo" className="footer-logo" />
          <p className="footer-text">All rights reserved to E-Cell SRMIST</p>
        </div>
        <div className="footer-links">
          <div className="policy-links">
            <a href="#privacy" className="policy-link">Privacy Policy</a>
            <a href="#cookies" className="policy-link">Cookies Policy</a>
          </div>
          <p className="credits">
            Created by <span className="highlight">Designers</span> and <span className="highlight">Developers</span> at E-Cell SRMIST
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;