import React from "react";
import "../css/Subteams.css";
import SubteamsImage from "../assets/Subteam1.jpg";

const Subteams = () => {
  return (
    <div className="subteams-container">
      {/* Hero Section */}
      <div className="subteams-hero">
        <div className="hero-content">
          <h1 className="subteams-title">Subteams</h1>
          <div className="title-line"></div>
          <p className="hero-description">
            Each engagement will have a project manager, a tech subteam, and a business subteam. 
            The tech and business subteams collaborate heavily to create solutions for clients, 
            with each subteam bringing unique expertise to the table.
          </p>
        </div>
        <div className="hero-image">
          <img src={SubteamsImage} alt="Our subteams" className="subteams-image" />
        </div>
      </div>


      {/* Subteams Grid */}
      <div className="subteams-grid">
        <div className="subteam-card tech-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 9h8M8 13h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="subteam-title">Tech</h2>
          <p className="subteam-description">
            The tech subteam focuses primarily on system design and developing the software/technology 
            that will be used to solve the client's problem. This subteam is highly technical, handling 
            architecture, potential code implementation, and ensuring the client's solution is scalable and efficient.
          </p>
          <div className="card-footer">
            <span className="role-tag">Technical Focus</span>
          </div>
        </div>

        <div className="subteam-card business-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M6 10H18M6 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="subteam-title">Business</h2>
          <p className="subteam-description">
            The business subteam focuses primarily on validating the tech solution and performing market 
            research and data analysis, ensuring it aligns with customer needs and business goals. They 
            also handle pricing strategies, competitor analysis, and identifying potential revenue streams.
          </p>
          <div className="card-footer">
            <span className="role-tag">Strategic Focus</span>
          </div>
        </div>

        <div className="subteam-card pm-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="subteam-title">Project Management</h2>
          <p className="subteam-description">
            Project managers are the main point of contact between the TCA executive team, clients, and 
            consultants. This is a leadership-heavy role where project managers coordinate tasks, manage 
            timelines, and ensure clear communication across all parties while overseeing project progress.
          </p>
          <div className="card-footer">
            <span className="role-tag">Leadership Focus</span>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bottom-note">
        <p>Please note that you can only join one subteam per engagement.</p>
      </div>
    </div>
  );
};

export default Subteams;