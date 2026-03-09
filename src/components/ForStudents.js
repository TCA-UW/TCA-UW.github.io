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
             TCA offers workshops, career events, and hands-on engagements, preparing you for a competitive consulting landscape
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
              <p className="for-students-program-subtitle">ML Foundations & Consulting Practice</p>
              <p className="for-students-program-description">
                Sandbox is where members build a strong, high-level understanding of machine learning for real-world decision making. You’ll learn how to frame problems, compare approaches, and explain the tradeoffs behind different models—like you would in an ML consulting setting—before diving into deeper technical builds.
              </p>
              <ul className="for-students-program-bullets">
                <li>High-level ML concepts for practical use cases</li>
                <li>Model selection rationale & tradeoff analysis</li>
                <li>Problem framing and stakeholder communication</li>
                <li>Build confidence before client work and technical projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nexus - White section: Image left, Content right */}
        <div className="for-students-program-section for-students-program-section-white">
          <div className="for-students-program-section-container">
            <div className="for-students-program-content-wrapper">
              <h3 className="for-students-program-title">Nexus Program</h3>
              <p className="for-students-program-subtitle">Project-Based ML Development</p>
              <p className="for-students-program-description">
                Nexus is a project-based course designed to teach members how to build real-world machine learning projects.
                It’s more technical and hands-on than Sandbox, helping you develop the skills needed to contribute confidently on client engagements.
              </p>
              <ul className="for-students-program-bullets">
                <li>End-to-end ML project development</li>
                <li>Implement LLM pipelines, RAG systems, and CV models</li>
                <li>Version control, deployment, and production workflows</li>
                <li>Technical mentorship and code reviews</li>
              </ul>
            </div>
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={Workshop} alt="Nexus program" />
              </div>
              <p className="for-students-program-caption">Hands-on development workshops to get engagement-ready</p>
            </div>
          </div>
        </div>

        {/* Engagements - Navy section: Content left, Image right */}
        <div className="for-students-program-section for-students-program-section-navy">
          <div className="for-students-program-section-container">
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={engagementsImage} alt="Engagements program" />
              </div>
              <p className="for-students-program-caption"></p>
            </div>
            <div className="for-students-program-content-wrapper">
              <h3 className="for-students-program-title">Engagements</h3>
              <p className="for-students-program-subtitle">Client-Facing Projects</p>
              <p className="for-students-program-description">
                Work on real projects with startups, nonprofits, and businesses. Join our Analyst, Developer, or Project Management subteams to deliver professional solutions and interact directly with clients.
              </p>
              <ul className="for-students-program-bullets">
                <li>Real projects with startups, nonprofits, and businesses</li>
                <li>Analyst, Developer, or Project Management subteams</li>
                <li>Professional deliverables & client interaction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Events - White section: Image left, Content right */}
        <div className="for-students-program-section for-students-program-section-white">
          <div className="for-students-program-section-container">
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
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={Accenture1} alt="Career Events program" />
              </div>
              <p className="for-students-program-caption">Our members at an Accenture panel event</p>
            </div>
          </div>
        </div>

        {/* Social Events - Navy section: Content left, Image right */}
        <div className="for-students-program-section for-students-program-section-navy">
          <div className="for-students-program-section-container">
            <div className="for-students-program-visual">
              <div className="for-students-program-image-wrapper">
                <img src={Social} alt="TCA social events" />
              </div>
              <p className="for-students-program-caption">Members at a TCA Friendsgiving Potluck</p>
            </div>
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
          </div>
        </div>
      </section>

      {/* Wave: navy -> white (Subteams section white) */}
      <svg className="for-students-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#062031" />
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* Subteams Section - white, outside the wave */}
      <section ref={subteamsRef} id="subteams" className="for-students-subteams">
        <div className="for-students-section-inner">
          <h2 className="for-students-section-title">Subteams</h2>
          <p className="for-students-section-desc">
            Engagement teams are intentionally not siloed. In Quarter 1, anyone can do anything—research, modeling, prototyping, and
            building—while PMs keep the team aligned. In Quarter 2, Developers take point on implementation and delivery.
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
              <h3 className="for-students-subteam-title">Analysis &amp; Development</h3>
              <p className="for-students-subteam-desc">
                In Quarter 1, everyone contributes across the full workflow—scoping, analysis, prototyping, and building. In Quarter 2,
                Developers take point on implementation and shipping the solution.
              </p>
              <span className="for-students-role-tag">Solution Focus</span>
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

          <p className="for-students-subteams-note">
            You can only join one subteam per engagement, but Quarter 1 is intentionally cross-functional.
          </p>
        </div>
      </section>

      {/* Wave: white -> navy (Highlights section navy) */}
      <svg className="for-students-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#062031" />
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#ffffff" />
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
