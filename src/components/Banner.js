import React from "react";
import { Link } from "react-router-dom";
import "../css/Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Link to="/join" className="banner-link">
        <strong>Applications to join our Spring 2025 cohort are now open! Click here to apply now.</strong>
      </Link>
    </div>
  );
};

export default Banner;
