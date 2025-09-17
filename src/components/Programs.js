import React from "react";
import "../css/Programs.css";

const Programs = () => {
  return (
    <div className="programs-container">
      {/* Hero Section */}
      <div className="programs-hero">
        <div className="hero-content">
          <h1 className="programs-title">Programs</h1>
          <div className="title-line"></div>
          <p className="hero-description">
            TCA offers two programs designed to support members at different stages of their consulting journey.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="programs-grid">
        <div className="program-card sandbox-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="program-title">Sandbox</h2>
          <p className="program-subtitle">Workshops & Business Case Practice</p>
          <p className="program-description">
            Sandbox is a learning-focused program with workshops, case challenges, and simulations. 
            It emphasizes problem-structuring, business frameworks, and communication skills. This program 
            is ideal for members who want to strengthen consulting fundamentals before taking on client-facing work.
          </p>
        </div>

        <div className="program-card engagements-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="program-title">Engagements</h2>
          <p className="program-subtitle">Client-Facing Projects</p>
          <p className="program-description">
            Engagements are real-world consulting projects with startups, nonprofits, and businesses. 
            Members join the Tech, Business, or Project Manager subteams to design and deliver solutions. 
            Engagements provide practical experience, professional deliverables, and client interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
