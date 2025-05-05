import React from "react";
import "../css/About.css";
import AboutImage from "../assets/GroupPic1.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <div className="about-image-container">
        <img src={AboutImage} alt="About us" className="about-image" />
      </div>
      <p className="about-info">
        TCA is the University of Washington's premier student-run technology consultancy.
        We offer a variety of services tailored at helping companies solve their problems
        using technology including software development, systems architecture,
        cloud solutions, data analysis, and database management. We also help students foster the consulting
        skills they need to succeed in the industry. If you're company looking for a tech consult, we'd love to
        get to know you, what you'd like out of consulting, and what brought you here! Find more information about
        how to contact us on the "Contact" page above.
      </p>
    </div>
  );
};

export default About;