import React, { useEffect } from "react";
import "../css/Services.css";
import codeIcon from "../assets/web-programming.png";
import cloudIcon from "../assets/cloud-service.png";
import chartIcon from "../assets/analysis.png";
import dbIcon from "../assets/db.png";

const Services = () => {
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
    const sections = document.querySelectorAll('.services-overview');
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
    <div className="services-container">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-content">
          <h1 className="services-title">Our Services</h1>
          <div className="title-line-services"></div>
          <p className="hero-description">
            TCA offers a comprehensive range of technology consulting services designed to support businesses 
            in achieving their technology goals. Our expertise spans system design, database management, 
            cloud solutions, data analysis, and more.
          </p>
        </div>
      </div>

      {/* Services Section - Combined Overview and Grid */}
      <div className="services-overview">
        <div className="section-content">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-description">
            We work closely with our clients to provide tailored solutions that enhance operational efficiency, 
            ensure robust security, and promote scalable growth. Whether you need to build a custom application, 
            optimize your infrastructure, or adopt innovative technologies, TCA is here to guide you toward success.
          </p>
          
          <div className="services-items">
            <div className="service-item">
              <div className="service-icon">
                <img src={codeIcon} alt="System Design" />
              </div>
              <h3 className="service-name">System Design</h3>
              <p className="service-description">
                Architect scalable and robust software systems with modern design patterns, 
                microservices architecture, and performance optimization strategies.
              </p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src={cloudIcon} alt="Cloud Solutions" />
              </div>
              <h3 className="service-name">Cloud Solutions</h3>
              <p className="service-description">
                Migrate to the cloud with confidence using AWS, Azure, and GCP. 
                Implement DevOps practices, containerization, and infrastructure automation.
              </p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src={chartIcon} alt="Data Analysis" />
              </div>
              <h3 className="service-name">Data Analysis</h3>
              <p className="service-description">
                Transform raw data into actionable insights using advanced analytics, 
                machine learning models, and data visualization techniques.
              </p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src={dbIcon} alt="Database Management" />
              </div>
              <h3 className="service-name">Database Management</h3>
              <p className="service-description">
                Optimize database performance, design efficient schemas, and implement 
                data security best practices for SQL and NoSQL databases.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;

// Source: "https://www.flaticon.com/free-icons/chipset"