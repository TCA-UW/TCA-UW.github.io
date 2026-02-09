import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ForStudents.css";
import engagementsImage from "../assets/Subteam1.jpg";
import Sandbox from "../assets/other/Sandbox.jpg";
import Accenture1 from "../assets/other/accenture1.jpg";
import Social from "../assets/other/Social.jpg";
import Accenture2 from "../assets/other/accenture2.jpg";
import ClientReveal from "../assets/other/ClientReveal.jpg";
import DawgDaze from "../assets/other/DawgDaze.jpg";
import InterestMeeting from "../assets/other/InterestMeeting.jpg";
import Workshop from "../assets/other/Workshop.jpg";
import Winners from "../assets/other/Winners.jpg";

const ForStudents = () => {
  const location = useLocation();
  const [highlightIndex, setHighlightIndex] = useState(0);
  const heroRef = React.useRef(null);
  const programsRef = React.useRef(null);
  const subteamsRef = React.useRef(null);
  const highlightsRef = React.useRef(null);

  const quarterHighlights = [
    { src: ClientReveal, alt: "Members getting debriefed on their engagement for the quarter" },
    { src: DawgDaze, alt: "Our Fall 2025 DawgDaze event" },
    { src: InterestMeeting, alt: "Our Presidents leading a Fall 2025 Interest Meeting" },
    { src: Workshop, alt: "Members at a collab workshop with DubHacks" },
    { src: Accenture2, alt: "Members at an Accenture panel event" },
    { src: Winners, alt: "Our Fall 2025 Sandbox Program mock case winners" }, 
  ];

  useEffect(() => {
    const hash = location.hash || window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const baseSections = [heroRef.current, programsRef.current, subteamsRef.current, highlightsRef.current].filter(
      Boolean
    );
    const programSections = Array.from(document.querySelectorAll(".for-students-program-section"));
    const elements = [...baseSections, ...programSections];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fs-in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const goPrevHighlight = () => {
    setHighlightIndex((i) => (i === 0 ? quarterHighlights.length - 1 : i - 1));
  };

  const goNextHighlight = () => {
    setHighlightIndex((i) => (i === quarterHighlights.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="for-students-container">
      {/* Hero */}
      <div ref={heroRef} className="for-students-hero">
        <div className="for-students-hero-content">
          <h1 className="for-students-title">For Students</h1>
          <div className="for-students-title-line"></div>
          <p className="for-students-hero-desc">
             TCA offers workshops, case practice, career events, and hands-on engagements, preparing you for a competitive consulting landscape
          </p>
        </div>
      </div>

      {/* Programs Section - Full-width alternating sections */}
      <section ref={programsRef} id="programs" className="for-students-programs">
        {/* Sandbox - Navy section: Image left, Content right */}
        <div className="for-students-program-section for-students-program-section-navy">
          <div className="for-students-program-section-container">
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={Sandbox} alt="Sandbox program" />
              </div>
              <p className="for-students-program-caption">Winners of Spring 2025 Sandbox Mock Case</p>
            </div>
            <div className="for-students-program-content-wrapper">
              <h3 className="for-students-program-title">Sandbox Program</h3>
              <p className="for-students-program-subtitle">Workshops & Business Case Practice</p>
              <p className="for-students-program-description">
                Sandbox provides workshops, case challenges, and simulations to help you build fundamental consulting skills. Learn problem-structuring, business frameworks, and communication skills before diving into client work.
              </p>
              <ul className="for-students-program-bullets">
                <li>Workshops, case challenges, and simulations</li>
                <li>Problem-structuring & business frameworks</li>
                <li>Communication skills</li>
                <li>Build fundamentals before client work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Engagements - White section: Content left, Image right */}
        <div className="for-students-program-section for-students-program-section-white">
          <div className="for-students-program-section-container">
            <div className="for-students-program-content-wrapper">
              <h3 className="for-students-program-title">Engagements</h3>
              <p className="for-students-program-subtitle">Client-Facing Projects</p>
              <p className="for-students-program-description">
                Work on real projects with startups, nonprofits, and businesses. Join Tech, Business, or PM subteams to deliver professional solutions and interact directly with clients.
              </p>
              <ul className="for-students-program-bullets">
                <li>Real projects with startups, nonprofits, and businesses</li>
                <li>Tech, Business, or PM subteams</li>
                <li>Professional deliverables & client interaction</li>
              </ul>
            </div>
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={engagementsImage} alt="Engagements program" />
              </div>
              <p className="for-students-program-caption"></p>
            </div>
          </div>
        </div>

        {/* Career Events - Navy section: Image left, Content right */}
        <div className="for-students-program-section for-students-program-section-navy">
          <div className="for-students-program-section-container">
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={Accenture1} alt="Career Events program" />
              </div>
              <p className="for-students-program-caption">Our members at an Accenture panel event</p>
            </div>
            <div className="for-students-program-content-wrapper">
              <h3 className="for-students-program-title">Career Events</h3>
              <p className="for-students-program-subtitle">Guest Lectures & Networking</p>
              <p className="for-students-program-description">
                Connect with industry professionals through guest lectures, hands-on workshops, company visits, and networking events. Gain insights into consulting careers and build your professional network.
              </p>
              <ul className="for-students-program-bullets">
                <li>Guest lectures from industry professionals</li>
                <li>Hands-on workshops on tools & frameworks</li>
                <li>Company visits to consultancies & tech firms</li>
                <li>Networking events</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Events - White section: Content left, Image right */}
        <div className="for-students-program-section for-students-program-section-white">
          <div className="for-students-program-section-container">
            <div className="for-students-program-content-wrapper">
              <h3 className="for-students-program-title">Social Events</h3>
              <p className="for-students-program-subtitle">Community & Culture</p>
              <p className="for-students-program-description">
                Beyond projects and training, TCA hosts social events that build real friendships and a strong community. Join us for hangouts, celebrations, and campus events that make the club feel like home.
              </p>
              <ul className="for-students-program-bullets">
                <li>Quarterly socials and end-of-quarter celebrations</li>
                <li>Game nights, mixers, and informal meetups</li>
                <li>Community-building events with project teams</li>
                <li>Opportunities to connect across cohorts</li>
              </ul>
            </div>
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={Social} alt="TCA social events" />
              </div>
              <p className="for-students-program-caption">Members at a TCA Friendsgiving Potluck</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: white -> navy (Subteams section navy) */}
      <svg className="for-students-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#ffffff" />
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#062031" />
      </svg>

      {/* Subteams Section - navy, outside the wave */}
      <section ref={subteamsRef} id="subteams" className="for-students-subteams">
        <div className="for-students-section-inner">
          <h2 className="for-students-section-title for-students-section-title-dark">Subteams</h2>
          <p className="for-students-section-desc for-students-section-desc-dark">
            Each engagement has a project manager, tech subteam, and business subteam—each bringing unique expertise.
          </p>

          <div className="for-students-subteams-grid">
            <div className="for-students-subteam-card">
              <div className="for-students-subteam-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M8 9h8M8 13h8" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="for-students-subteam-title">Tech</h3>
              <p className="for-students-subteam-desc">
                System design and development. Architecture, implementation, and scalable solutions for clients.
              </p>
              <span className="for-students-role-tag">Technical Focus</span>
            </div>

            <div className="for-students-subteam-card">
              <div className="for-students-subteam-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M6 10H18M6 14H18" strokeLinecap="round" />
                  <circle cx="12" cy="4" r="2" />
                </svg>
              </div>
              <h3 className="for-students-subteam-title">Business</h3>
              <p className="for-students-subteam-desc">
                Market research, data analysis, and strategy. Validating solutions and aligning with business goals.
              </p>
              <span className="for-students-role-tag">Strategic Focus</span>
            </div>

            <div className="for-students-subteam-card">
              <div className="for-students-subteam-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="for-students-subteam-title">Project Management</h3>
              <p className="for-students-subteam-desc">
                Main point of contact between exec, clients, and consultants. Coordination, timelines, and clear communication.
              </p>
              <span className="for-students-role-tag">Leadership Focus</span>
            </div>
          </div>

          <p className="for-students-subteams-note">You can only join one subteam per engagement.</p>
        </div>
      </section>

      {/* Wave: navy -> white (Quarter Highlights section white) */}
      <svg className="for-students-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#ffffff" />
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#062031" />
      </svg>

      {/* Highlights - in the navy wave below subteams */}
      <section ref={highlightsRef} id="highlights" className="for-students-highlights">
        <div className="for-students-section-inner for-students-highlights-inner">
          <h2 className="for-students-section-title for-students-highlights-title">Highlights</h2>
          <p className="for-students-section-desc for-students-highlights-desc">Pictures showcasing what we've been up to this past year!</p>
          <div className="for-students-carousel">
            <button
              type="button"
              className="for-students-carousel-btn for-students-carousel-prev"
              onClick={goPrevHighlight}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="for-students-carousel-frame">
              {quarterHighlights.map((img, idx) => (
                <div
                  key={idx}
                  className={`for-students-carousel-slide ${idx === highlightIndex ? "active" : ""}`}
                >
                  <img src={img.src} alt={img.alt} />
                  <div className="for-students-carousel-caption">{img.alt}</div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="for-students-carousel-btn for-students-carousel-next"
              onClick={goNextHighlight}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="for-students-carousel-dots">
            {quarterHighlights.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`for-students-dot ${idx === highlightIndex ? "active" : ""}`}
                onClick={() => setHighlightIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStudents;
