import React, { useEffect } from "react";
import "../css/Join.css";
import JoinImage from "../assets/Join1.jpg";

const Join = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe the application section
    const applicationSection = document.querySelector('.application-section');
    if (applicationSection) {
      observer.observe(applicationSection);
    }

    return () => {
      if (applicationSection) {
        observer.unobserve(applicationSection);
      }
    };
  }, []);

  return (
    <div className="join-container">
      {/* Hero Section */}
      <div className="join-hero">
        <div className="hero-content">
          <h1 className="join-title">Join TCA</h1>
          <div className="title-line"></div>
          <div className="hero-text">
            <p className="hero-description">
              TCA is looking for students who are strong <strong>problem solvers</strong>, passionate about <strong>technology</strong>, and want to gain <strong>real-world</strong> consulting experience.
            </p>
            <a href="https://forms.gle/pfrn4xvEPKcZk7rm6" className="hero-apply-button" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={JoinImage} alt="Join us" className="join-image" />
        </div>
      </div>

      {/* Recruitment Timeline */}
      <div className="application-section">
        <div className="application-header">
          <h2 className="section-title">Recruitment Timeline</h2>
          <p className="timeline-description">Hover on each event to learn more about each step of our recruitment process!</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">1</span>
            </div>
            <div className="timeline-content">
              <h3>DawgDaze: Byte Into Consulting</h3>
              <p><strong>September 18th </strong> (HUB 145) + <strong>September 22nd</strong> (SAV 138) from 3 - 4 PM</p>
              <div className="hover-description">
                Learn about what TCA does and play a fun consulting-themed game with us!
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">2</span>
            </div>
            <div className="timeline-content">
              <h3>Coffee Chats</h3>
              <p><strong>September 29th - October 3rd</strong></p>
              <div className="hover-description">
                One-on-one conversations with TCA members to learn more about our culture, subteams, and experiences!
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">3</span>
            </div>
            <div className="timeline-content">
              <h3>Interest Meeting</h3>
              <p><strong>October 1st</strong> in DEM 112 from 6 - 7 PM</p>
              <div className="hover-description">
                Detailed presentation about what tech consulting is, TCA's mission, and how members can get involved!
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">4</span>
            </div>
            <div className="timeline-content">
              <h3>Applications Close</h3>
              <p><strong>October 4th at 11:59 PM</strong></p>
              <div className="hover-description">
                Submit your application including resume, cover letter, subteam preferences, and essay questions!
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">5</span>
            </div>
            <div className="timeline-content">
              <h3>Interviews</h3>
              <p><strong>Week of October 7th</strong> - Rooms TBD</p>
              <div className="hover-description">
                Technical interviews to assess fit for TCA's consulting projects!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
