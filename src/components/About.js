import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import AboutImage from "../assets/GroupPic1.jpg";
import JoinImage from "../assets/Join1.jpg";

const About = () => {
  const clientServices = [
    "System Design",
    "Cloud Solutions",
    "Data Analysis",
    "Database Management",
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="about-title">About TCA</h1>
          <div className="title-line"></div>
          <p className="hero-description">
            The University of Washington's premier student-run technology consultancy. 
            We bridge the gap between innovative technology solutions and real-world business challenges.
          </p>
        </div>
        <div className="hero-image">
          <img src={AboutImage} alt="TCA Team" className="about-image" />
        </div>
      </div>

      {/* Navy wave: curved top, flat bottom */}
      <svg className="about-section-divider about-divider-turquoise" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#062031"/>
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#ffffff"/>
      </svg>

      {/* For Clients */}
      <div className="about-for-clients">
        <div className="about-clients-inner">
          <div className="about-clients-text">
            <h2 className="section-title">For Clients</h2>
            <p className="section-description">
              Work with UW's top students on technology consulting projects. We deliver AI-driven solutions 
              and strategic insights for startups, nonprofits, and established businesses—at no cost to you.
            </p>
            <Link to="/for-clients" className="about-section-btn">Clients</Link>
          </div>
          <div className="about-clients-list">
            <ul>
              {clientServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* For Students - simple rectangular section */}
      <div className="about-for-students">
        <div className="about-students-inner">
          <div className="about-students-image">
            <img src={JoinImage} alt="TCA members" />
          </div>
          <div className="about-students-text">
            <h2 className="section-title">For Students</h2>
            <p className="section-description">
              TCA runs workshops, case practice sessions, and info events throughout the year. 
              Join Sandbox to build consulting fundamentals, or take on real client projects through Engagements. 
              You'll grow your skills, expand your network, and gain experience that stands out on a resume.
            </p>
            <Link to="/for-students" className="about-section-btn">Students</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;