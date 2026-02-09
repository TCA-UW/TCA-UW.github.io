import React from 'react';
import '../css/LogoSlider.css';
import accenture from '../assets/companies/accenture.png';
import bdo from '../assets/companies/bdo.png';
import deloitte from '../assets/companies/deloitte.png';
import ey from '../assets/companies/ey.png';
import pwc from '../assets/companies/pwc.png';
import amazon from '../assets/companies/amazon.png';

const LogoSlider = () => {
  const logos = [accenture, bdo, deloitte, ey, pwc, amazon];

  return (
    <section className="logo-slider-section">
      <div className="logo-slider-content">
        <h2>Qualifications</h2>
        <p>Our members have interned at leading companies including:</p>
        <div className="logo-slider">
          <div className="logo-track">
            {logos.concat(logos).map((logo, index) => (
              <img src={logo} alt={`Logo ${index}`} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;