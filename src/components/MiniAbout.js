import React from 'react';
import '../css/MiniAbout.css';
import team30 from '../assets/Team30.png';

const MiniAbout = () => {
  return (
    <>
      <svg className="section-divider" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,80 Q300,0 600,80 T1200,80 L1200,200 L0,200 Z" fill="#062031"/>
        <path d="M0,80 Q300,0 600,80 T1200,80 L1200,0 L0,0 Z" fill="#f5f7fa"/>
      </svg>
      <section className="mini-about-section">
        <div className="mini-about-container">
          <div className="mini-about-image">
            <img src={team30} alt="TCA Team" />
          </div>
          <div className="mini-about-content">
            <h2>About TCA</h2>
            <p>
              The Technology Consulting Association at the University of Washington connects UW's brightest minds
              with real-world business challenges. We're a student-led consulting org dedicated to delivering AI-driven solutions and strategic insights to clients across industries. From startups to Fortune 500s, we partner with organizations ready to innovate.
            </p>
            <a href="/about" className="btn-primary">Learn More</a>
          </div>
        </div>
      </section>
      <svg className="section-divider-bottom" viewBox="0 0 1200 200" preserveAspectRatio="none">
  <path d="M0,80 Q300,0 600,80 T1200,80 L1200,0 L0,0 Z" fill="#062031"/>
  <path d="M0,80 Q300,0 600,80 T1200,80 L1200,200 L0,200 Z" fill="#f5f7fa"/>
</svg>
    </>
  );
};

export default MiniAbout;