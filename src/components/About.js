import React, { useEffect } from "react";
import "../css/About.css";
import AboutImage from "../assets/GroupPic1.jpg";
import codeIcon from "../assets/web-programming.png";
import cloudIcon from "../assets/cloud-service.png";
import chartIcon from "../assets/analysis.png";
import dbIcon from "../assets/db.png";

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections that need animation
    const sections = document.querySelectorAll('.who-we-are, .what-we-do, .why-choose-us, .about-cta');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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


      {/* Who We Are Section */}
      <div className="who-we-are">
        <div className="section-content">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-description">
            TCA is a student-run organization at the University of Washington that provides 
            cutting-edge technology consulting services to businesses of all sizes. Our team 
            consists of passionate students from computer science, engineering, business, 
            and other disciplines who are eager to apply their knowledge to real-world challenges.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="what-we-do">
        <div className="section-content">
          <h2 className="section-title">What We Do</h2>
          <p className="section-description">
            We provide comprehensive technology consulting services including software development, 
            cloud solutions, data analysis, and database management. Our multidisciplinary teams 
            combine technical expertise with business acumen to deliver innovative solutions that 
            drive real business value.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <div className="section-content">
          <h2 className="section-title">Why Choose TCA</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="benefit-title">Fresh Perspective</h3>
              <p className="benefit-description">
                Student consultants bring innovative, cutting-edge approaches to traditional problems
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Cost-Effective</h3>
              <p className="benefit-description">
                High-quality consulting services provided pro bono
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7006C21.7033 16.047 20.9999 15.5858 20.2 15.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Diverse Expertise</h3>
              <p className="benefit-description">
                Multidisciplinary teams combining technical and business expertise
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="about-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Work With Us?</h2>
          <p className="cta-description">
            Whether you're a company looking for innovative tech solutions or a student 
            wanting to develop consulting skills, we'd love to hear from you.
          </p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default About;