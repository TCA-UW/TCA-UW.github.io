import React from 'react';
import '../css/Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="left-content">
        <p className="company-name"><b>Technology Consulting Association at the University of Washington</b></p>
        <div className="social-links">
          <a href="https://www.instagram.com/tca_uw" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/tca-uw" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:uwtechconsulting@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
      <div className="right-content">
        <p2 className="copyright">
          &copy; Technology Consulting Association at the University of Washington
        </p2>
        
      </div>
    </footer>
  );
}

export default Footer;
