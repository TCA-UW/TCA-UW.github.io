import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import LogoSlider from './LogoSlider';
import CountUp from "./CountUp";
import SeattleImg from '../assets/Seattle.jpeg';
import MiniAbout from './MiniAbout';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroStyle = {
    backgroundImage: `url(${SeattleImg})`
  };

  return (
    <div className="home-container">
      {/* Full-bleed Seattle Hero */}
      <section className="hero" style={heroStyle}>
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">University of Washington</span>
          <h1 className="hero-title">
            Technology Consulting<br/>
            <span className="accent">Association</span>
          </h1>
          <p className="hero-tagline">
            AI-driven expertise meets real-world impact
          </p>
          <div className="hero-cta">
            <Link to="/for-clients" className="btn-primary">Clients</Link>
            <Link to="/for-students" className="btn-outline">Students</Link>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="bento-section">
        <div className="bento-grid">
          {/* Stats row */}
          <div className="bento-card stat-card scroll-reveal">
            <span className="stat-num"><CountUp value={20} suffix="+" /></span>
            <span className="stat-label">Majors Represented</span>
          </div>
          <div className="bento-card stat-card scroll-reveal">
            <span className="stat-num"><CountUp value={25} suffix="+" /></span>
            <span className="stat-label">Client Engagements</span>
          </div>
          <div className="bento-card stat-card scroll-reveal">
            <span className="stat-num"><CountUp value={37} /></span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="bento-card stat-card scroll-reveal">
            <span className="stat-num"><CountUp value={90} suffix="%" /></span>
            <span className="stat-label">Internship Rate</span>
          </div>

          
          
      
          
        </div>
      </section>

      <MiniAbout />

    
      <LogoSlider />
     



      {/* CTA */}
      <svg className="cta-section-divider" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,80 Q300,0 600,80 T1200,80 L1200,200 L0,200 Z" fill="#062031"/>
        <path d="M0,80 Q300,0 600,80 T1200,80 L1200,0 L0,0 Z" fill="#f5f7fa"/>
      </svg>
      <section className="cta-section">
        <div className="cta-content scroll-reveal">
          <h2>Get In Touch With Us</h2>
          <p>Have questions or want to collaborate? We'd love to hear from you.</p>
          <a href="/contact" className="btn-primary" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
