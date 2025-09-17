import React from "react";
import { Link } from "react-router-dom";
import "../css/404.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <div className="title-line-404"></div>
        <p className="error-description">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-actions">
          <Link to="/" className="home-button">
            Go Home
          </Link>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
