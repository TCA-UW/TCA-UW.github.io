import React from 'react';
import '../css/Home.css';
import LogoSlider from './LogoSlider';
import CountUp from "./CountUp"; 

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Technology Consulting Association</h1>
          <p>At the University of Washington</p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="what-we-do-content">
          <h2>Empowering businesses to unlock smarter operations and next-level efficiency through innovative technological solutions</h2>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="tca-stats" className="stats stats--light">
        <div className="stats-wrap">
          <div className="stat">
            <div className="stat-num">
              <CountUp value={20} suffix="+" />
            </div>
            <div className="stat-label">majors</div>
          </div>

          <div className="stat">
            <div className="stat-num">
              <CountUp value={25} suffix="+" />
            </div>
            <div className="stat-label">prior engagements</div>
          </div>

          <div className="stat">
            <div className="stat-num">
              <CountUp value={23} />
            </div>
            <div className="stat-label">members across 7 subteams</div>
          </div>

          <div className="stat">
            <div className="stat-num">
              <CountUp value={85} prefix="~" suffix="%" />
            </div>
            <div className="stat-label">internship experience</div>
          </div>
        </div>

        {/*
        <p className="stats-footnote">
          *Internal estimate based on members who completed the prep track.
        </p>
        */}
      </section>
      
      <div className="between-sections">
        <div className="section-divider" role="separator" aria-hidden="true" />
      </div>

      {/* Experience Section */}
      <section className="experience-section slide-in">
        <div className="section-heading">
          <h2>Experience</h2>
          <p>A few of the firms and organizations our members have worked at.</p>
        </div>
        <LogoSlider />
      </section>

      {/* Let's connect section */}
      <section className="brand-statement">
        <div className="brand-container">
          <h2>Keep in Touch</h2>
        </div>
      </section>

    </div>
  );
};

export default Home;
