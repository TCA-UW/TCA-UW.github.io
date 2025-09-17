import React from 'react';
import '../css/LogoSlider.css'; // you'll create this next
import accenture from '../assets/companies/accenture.png';
import bdo from '../assets/companies/bdo.png';
import deloitte from '../assets/companies/deloitte.png';
import ey from '../assets/companies/ey.png';
import pwc from '../assets/companies/pwc.png';
import amazon from '../assets/companies/amazon.png';

const LogoSlider = () => {
  const logos = [accenture, bdo, deloitte, ey, pwc, amazon];

  return (
    <div className="logo-slider">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <img src={logo} alt={`Logo ${index}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
