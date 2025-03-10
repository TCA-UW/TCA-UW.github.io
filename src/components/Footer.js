import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="left-content">
        <p>&copy; 2025 Technology Student Association at the University of Washington</p>
      </div>
      <div className="right-content">
        <p className="questions">Questions?</p>
        <p className="contact">Contact techconsulting@uw.edu</p>
      </div>
    </footer>
  );
}

export default Footer;
