import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ForClients.css";
import codeIcon from "../assets/web-programming.png";
import cloudIcon from "../assets/cloud-service.png";
import chartIcon from "../assets/analysis.png";
import dbIcon from "../assets/db.png";
import processorIcon from "../assets/processor.png";
import toastedLogo from "../assets/clients/Toasted.jpg";
import marysPlaceLogo from "../assets/clients/MarysPlace.webp";
import southKitsapLogo from "../assets/clients/southkitsapfireandrescue.jpg";
import maintainHomesLogo from "../assets/clients/maintainhomeservices.png";

const ForClients = () => {
  const location = useLocation();
  const [servicesSlide, setServicesSlide] = useState(0); // 0=Tech, 1=Business, 2=ML
  const heroRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const timelineRef = React.useRef(null);
  const clientsRef = React.useRef(null);

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
    const elements = [heroRef.current, servicesRef.current, timelineRef.current, clientsRef.current].filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fc-in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const BriefcaseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
  const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
  const BarChartIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  );
  const FileTextIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
  const CpuIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/>
      <line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/>
      <line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/>
      <line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/>
      <line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  );
  const SparklesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/>
    </svg>
  );
  const TrendingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  );
  const EyeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  const serviceSections = [
    {
      name: "Tech",
      skills: [
        { icon: codeIcon, name: "System Design", desc: "Scalable systems, microservices, APIs" },
        { icon: cloudIcon, name: "Cloud Solutions", desc: "AWS, Azure, GCP, DevOps" },
        { icon: dbIcon, name: "Database Management", desc: "Schema design, optimization, security" },
        { icon: processorIcon, name: "Infrastructure", desc: "Containers, CI/CD, automation" },
      ],
    },
    {
      name: "Business",
      skills: [
        { icon: chartIcon, name: "Data Analysis", desc: "Analytics, dashboards, insights" },
        { icon: <BriefcaseIcon />, name: "Business Strategy", desc: "Process optimization, consulting" },
        { icon: <UsersIcon />, name: "Stakeholder Analysis", desc: "Requirements, workshops" },
        { icon: <FileTextIcon />, name: "Reporting", desc: "Metrics, KPIs, presentations" },
      ],
    },
    {
      name: "ML",
      skills: [
        { icon: <CpuIcon />, name: "Machine Learning", desc: "Models, training, deployment" },
        { icon: <SparklesIcon />, name: "AI & LLMs", desc: "LLM integration, RAG, agents" },
        { icon: <TrendingIcon />, name: "Predictive Analytics", desc: "Forecasting, recommendations" },
        { icon: <EyeIcon />, name: "Computer Vision", desc: "Image recognition, NLP" },
      ],
    },
  ];

  const goPrev = () => setServicesSlide((s) => (s === 0 ? 2 : s - 1));
  const goNext = () => setServicesSlide((s) => (s === 2 ? 0 : s + 1));

  const pastClients = [
    { name: "TOASTED. Bagels and Coffee", logo: toastedLogo },
    { name: "Mary's Place", logo: marysPlaceLogo },
    { name: "South Kitsap Fire and Rescue", logo: southKitsapLogo },
    { name: "Maintain Home Services", logo: maintainHomesLogo },
  ];

  const timelinePhases = [
    {
      title: "Plan",
      bullets: [
        "Define scope of project",
        "Develop statement of work",
        "Clients meet with exec as needed",
      ],
    },
    {
      title: "Propose",
      bullets: [
        "Research and develop proposal and implementation plan",
        "Design the architecture",
        "Clients meet with engagement team",
      ],
    },
    {
      title: "Implementation",
      bullets: [
        "Implement the solution for clients",
        "Meetings with development team",
      ],
    },
  ];

  return (
    <div className="for-clients-container">
      {/* Hero */}
      <div ref={heroRef} className="for-clients-hero">
        <div className="for-clients-hero-content">
          <h1 className="for-clients-title">For Clients</h1>
          <div className="for-clients-title-line"></div>
          <p className="for-clients-hero-desc">
            Work with UW's top students on technology consulting projects. We deliver AI-driven solutions, 
            system design, and strategic insights at no cost to you.
          </p>
        </div>
      </div>

      {/* Wave: white -> navy */}
      <svg className="for-clients-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#062031"/>
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#ffffff"/>
      </svg>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="for-clients-services">
        <div className="for-clients-section-inner">
          <h2 className="for-clients-section-title">Services</h2>
          <p className="for-clients-section-desc">
            We work closely with our clients to provide tailored solutions.
          </p>
          <div className="for-clients-services-carousel">
            <button type="button" className="for-clients-carousel-arrow for-clients-carousel-left" onClick={goPrev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="for-clients-carousel-track">
              {serviceSections.map((section, idx) => (
                <div
                  key={section.name}
                  className={`for-clients-carousel-slide ${idx === servicesSlide ? "active" : ""}`}
                >
                  <div className="for-clients-services-grid">
                    {section.skills.map((skill) => (
                      <div key={skill.name} className="for-clients-service-card">
                        <div className="for-clients-service-icon">
                          {React.isValidElement(skill.icon) ? skill.icon : <img src={skill.icon} alt={skill.name} />}
                        </div>
                        <h3 className="for-clients-service-name">{skill.name}</h3>
                        <p className="for-clients-service-desc">{skill.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="for-clients-carousel-arrow for-clients-carousel-right" onClick={goNext} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Wave: navy -> light */}
      <svg className="for-clients-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#062031"/>
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#ffffff"/>
      </svg>

      {/* Timeline Section */}
      <section ref={timelineRef} id="timeline" className="for-clients-timeline">
        <div className="for-clients-section-inner">
          <h2 className="for-clients-section-title">Engagement Timeline</h2>
          <p className="for-clients-section-desc">
            From discovery to delivery, here's how we work with you.
          </p>
          <div className="for-clients-timeline-row">
            {timelinePhases.map((phase, idx) => (
              <React.Fragment key={phase.title}>
                <div className="for-clients-timeline-phase">
                  <h3 className="for-clients-timeline-phase-title">
                    <span className="for-clients-timeline-phase-num">{String(idx + 1).padStart(2, "0")}</span>
                    {phase.title}
                  </h3>
                  <ul className="for-clients-timeline-phase-bullets">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                {idx < timelinePhases.length - 1 && (
                  <div className="for-clients-timeline-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: white -> navy */}
      <svg className="for-clients-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#062031"/>
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z" fill="#ffffff"/>
      </svg>

      {/* Past Clients Section */}
      <section ref={clientsRef} id="clients" className="for-clients-past-clients">
        <div className="for-clients-section-inner">
          <h2 className="for-clients-section-title">Past Clients</h2>
          <p className="for-clients-section-desc">
            A few of the organizations we've had the privilege to work with
          </p>
          <div className="for-clients-clients-row">
            {pastClients.map((client) => (
              <div key={client.name} className={`for-clients-client ${client.name === "Maintain Home Services" ? "for-clients-client-maintain" : ""}`}>
                <div className="for-clients-client-logo">
                  <img src={client.logo} alt={client.name} />
                </div>
                <span className="for-clients-client-name">{client.name}</span>
              </div>
            ))}
          </div>
          <p className="for-clients-and-more">and more…</p>
        </div>
      </section>
    </div>
  );
};

export default ForClients;
