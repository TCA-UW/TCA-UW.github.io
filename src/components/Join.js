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
      <div className="join-hero">
        <div className="hero-content">
          <h1 className="join-title">Join TCA</h1>
          <div className="title-line"></div>
          <div className="hero-text">
            <p className="hero-description">
              Thank you for your interest in TCA. We are not currently accepting applications. Applications for our <strong>Spring 2026 cohort</strong> will open towards the <strong>end of March 2026</strong>. Please check back here or follow our socials for the latest updates.
            </p>
            {/* Application button (temporarily disabled while applications are closed)
            <a
              href="https://forms.gle/pfrn4xvEPKcZk7rm6"
              className="hero-apply-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
            */}
          </div>
        </div>
        <div className="hero-image">
          <img src={JoinImage} alt="Join us" className="join-image" />
        </div>
      </div>

      <svg className="join-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#ffffff" />
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#062031" />
      </svg>

      {/* Previous recruitment timeline (kept for reference, currently not displayed)
      <div className="application-section">
        <div className="application-header">
          <h2 className="section-title">Recruitment Timeline</h2>
          <p className="timeline-description">
            Hover on each event to learn more about each step of our recruitment process!
          </p>
        </div>

        <div className="process-timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">1</span>
            </div>
            <div className="timeline-content">
              <h3>DawgDaze: Byte Into Consulting</h3>
              <p>
                <strong>September 18th </strong> (HUB 145) + <strong>September 22nd</strong> (SAV 138) from 3 - 4 PM
              </p>
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
              <p>
                <strong>September 29th - October 3rd</strong>
              </p>
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
              <p>
                <strong>October 1st</strong> in DEM 112 from 6 - 7 PM
              </p>
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
              <p>
                <strong>October 4th at 11:59 PM</strong>
              </p>
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
              <p>
                <strong>Week of October 7th</strong> - Rooms TBD
              </p>
              <div className="hover-description">
                Technical interviews to assess fit for TCA's consulting projects!
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      <div className="application-section">
        <div className="application-header">
          <h2 className="section-title">Our Recruitment Process</h2>
          <p className="timeline-description">
            Here&apos;s what to expect when you apply to join TCA.
          </p>
        </div>

        <div className="process-timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">0</span>
            </div>
            <div className="timeline-content">
              <h3>Optional Coffee Chats</h3>
              <p>
                Before applications open, we host informal coffee chats with current members for students who want to learn more about TCA.
              </p>
              <div className="hover-description">
                Coffee chats are completely optional and do not affect your application. They&apos;re a relaxed way to ask questions
                about our culture, projects, and subteams.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">1</span>
            </div>
            <div className="timeline-content">
              <h3>Application</h3>
              <p>
                Submit an online application that includes your <strong>resume</strong>, <strong>unofficial transcript</strong>,
                and a few <strong>short essay questions</strong> about your interests and experiences.
              </p>
              <div className="hover-description">
                We look for curiosity, problem-solving potential, and a genuine interest in technology and consulting.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-number">2</span>
            </div>
            <div className="timeline-content">
              <h3>Technical Interview</h3>
              <p>
                Selected applicants are invited to a technical interview that may include a <strong>mock case</strong> and/or
                a <strong>system design</strong> style problem, along with time for your questions.
              </p>
              <div className="hover-description">
                This is a collaborative conversation where we assess how you think through ambiguous problems and communicate your ideas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
