import React from "react";
import "../css/Services.css";
import codeIcon from "../assets/web-programming.png";
import cloudIcon from "../assets/cloud-service.png";
import chartIcon from "../assets/analysis.png";
import dbIcon from "../assets/db.png";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-info">
        TCA offers a range of tech consulting services designed to support businesses in achieving their
        technology goals. Our expertise spans system design, database management, cloud solutions,
        data analysis, and more. We work closely with our clients to
        provide tailored solutions that enhance operational efficiency, ensure robust security, and promote
        scalable growth. Whether you need to build a custom application, optimize your infrastructure, or
        adopt innovative technologies, TCA is here to guide you toward success.
      </p>
      <div className="services-icons">
        <div className="service-item">
          <img src={codeIcon} alt="System Design" className="service-icon"  />
          <p className="service-name">System Design</p>
        </div>
        <div className="service-item">
          <img src={cloudIcon} alt="Cloud Solutions" className="service-icon" />
          <p className="service-name">Cloud Solutions</p>
        </div>
        <div className="service-item">
          <img src={chartIcon} alt="Data Analysis" className="service-icon" />
          <p className="service-name">Data Analysis</p>
        </div>
        <div className="service-item">
          <img src={dbIcon} alt="Database Management" className="service-icon" />
          <p className="service-name">Database Management</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

// Source: "https://www.flaticon.com/free-icons/chipset"