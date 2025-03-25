import React from "react";
import "../css/Join.css";

const Join = () => {
  return (
    <div className="join-container">
      <h1 className="join-title">Join</h1>
      <p className="join-info">
        TCA consultants come from a variety of diverse backgrounds and majors, and we accept a new cohort
        at the beginning of every quarter.
      </p>

      <div className="application-card">
        <p className="application-status">
          <strong>Applications to join our Spring 2025 cohort are now open!</strong>
        </p>
        <ul className="application-bullets">
          <li>Applications are due on <b>April 5th at 11:59 PM</b></li>
          <li>This quarter, joining TCA is a two-quarter commitment: Spring 2025 and Fall 2025</li>
          <li>Applicants will be asked to rank their <a href="/about/subteams" className="hyperlink" target="_blank" rel="noopener noreferrer">subteam preferences</a></li>
          <li>Following the application, we will be conducting both behavioral and technical interviews</li>
          <li>Our final cohort will be notified by April 20th</li>
        </ul>
        <a href="https://forms.gle/a4rtY1MgL7iV2yc96" className="application-link" target="_blank" rel="noopener noreferrer">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Join;
