import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import AboutImage from "../assets/GroupPic1.jpg";
import JoinImage from "../assets/GroupPic2.png";

const About = () => {
  const clientServices = [
    "Computer Vision",
    "RAG Pipelines",
    "AI Integration",
    "LLM-Finetuning",
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="about-title">About TCA</h1>
          <div className="title-line"></div>
          <p className="hero-description">
            TCA is the University of Washington's premier student-run technology consultancy. We specialize in applied ML solutions, bridging
            the gap between innovative technology and the real-world business challenges of tomorrow.
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
              Looking to build with AI? We deliver applied ML solutions including LLM pipelines, RAG systems, and computer vision, built by top UW engineers.
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
              TCA runs workshops, case competitions, and industry panels throughout the year. 
              Join our Sandbox Program to build consulting fundamentals, or take on real client projects through an engagement. 
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