import React from 'react';
import "../css/Consultants.css";
import Gus from "../assets/headshots/Gus.jpg";
import Tatevik from "../assets/headshots/Tatevik.jpg";
import Kian from "../assets/headshots/Kian.jpg";
import Dylan from "../assets/headshots/Dylan.png";
import placeholder from "../assets/headshots/placeholder.jpg";
import Jessica from "../assets/headshots/Jessica.jpg";
import Ananya from "../assets/headshots/Ananya.png";
import Shiloh from "../assets/headshots/Shiloh.jpg";
import Ivonne from "../assets/headshots/Ivonne.jpg";

const subExecs = {
  marketingExecutiveSubteam: [
    { name: "Kian Gaskill", major: "Business Administration", image: Kian, linkedin: "https://www.linkedin.com/in/kian-gaskill-301954348/" },
    { name: "Phi Mongkhonvanit", major: "Business and Marketing", image: placeholder, linkedin: "https://www.linkedin.com/in/phimong/" },
  ],
  outreachExecutiveSubteam: [
    { name: "Gus Abramowitz", major: "Information Systems", image: Gus, linkedin: "https://www.linkedin.com/in/gus-abramowitz-4328122aa/" },
    { name: "Brayden Choi", major: "Finance", image: placeholder, linkedin: "https://www.linkedin.com/in/brayden-choi317/" }
  ],
  mleDevExecutiveSubteam: [
    { name: "Ivonne Zhang", major: "Applied & Computational Mathematics", image: Ivonne, linkedin: "https://www.linkedin.com/in/yimenz5/"},
    { name: "Tatevik Poghosyan", major: "Informatics", image: Tatevik, linkedin: "https://www.linkedin.com/in/tatevik-poghosyan-90349a352/" }
  ],
  analystDevExecSubteam: [
    { name: "Dylan Song", major: "Informatics & Business", image: Dylan, linkedin: "https://www.linkedin.com/in/dylan-song/" },
    { name: "Shiloh Dhasan", major: "Computer Science", image: Shiloh, linkedin: "https://www.linkedin.com/in/shiloh-dhasan-b167a5387/" },
  ],
  pdExecSubteam: [
    { name: "Jessica Chendra", major: "Informatics & Marketing", image: Jessica, linkedin: "https://www.linkedin.com/in/jessica-chendra-a8a0a8207/" },
    { name: "Ananya Prakash", major: "Computer Science", image: Ananya, linkedin: "https://www.linkedin.com/in/apraka/" },
  ]
};

const ExecSubMembers = () => {
  return (
    <div className="consultants-container">
      <div className="exec-subteams-header-section">
        <h1 className="exec-subteams-title">Executive Subteams</h1>
        <div className="exec-subteams-title-line"></div>
      </div>

      <div className="levelOrganizationConsultants">
        <h3>Marketing Executive Subteam</h3>
      </div>
      <div className="consultants-grid">
        {subExecs.marketingExecutiveSubteam.map((member) => (
          <div className="consultant-card" key={member.name}>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              {member.image && <img src={member.image} className="consultant-image" alt={member.name} />}
            </a>
            <p className="consultant-name">{member.name}</p>
            <p className="consultant-major">{member.major}</p>
          </div>
        ))}
      </div>

      <div className="levelOrganizationConsultants">
        <h3>Outreach Executive Subteam</h3>
      </div>
      <div className="consultants-grid">
        {subExecs.outreachExecutiveSubteam.map((member) => (
          <div className="consultant-card" key={member.name}>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              {member.image && <img src={member.image} className="consultant-image" alt={member.name} />}
            </a>
            <p className="consultant-name">{member.name}</p>
            <p className="consultant-major">{member.major}</p>
          </div>
        ))}
      </div>

      <div className="levelOrganizationConsultants">
        <h3>MLE Development Executive Subteam</h3>
      </div>
      <div className="consultants-grid">
        {subExecs.mleDevExecutiveSubteam.map((member) => (
          <div className="consultant-card" key={member.name}>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              {member.image && <img src={member.image} className="consultant-image" alt={member.name} />}
            </a>
            <p className="consultant-name">{member.name}</p>
            <p className="consultant-major">{member.major}</p>
          </div>
        ))}
      </div>

      <div className="levelOrganizationConsultants">
        <h3>Analysis Development Executive Subteam</h3>
      </div>
      <div className="consultants-grid">
        {subExecs.analystDevExecSubteam.map((member) => (
          <div className="consultant-card" key={member.name}>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              {member.image && <img src={member.image} className="consultant-image" alt={member.name} />}
            </a>
            <p className="consultant-name">{member.name}</p>
            <p className="consultant-major">{member.major}</p>
          </div>
        ))}
      </div>

      <div className="levelOrganizationConsultants">
        <h3>Professional Development Executive Subteam</h3>
      </div>
      <div className="consultants-grid">
        {subExecs.pdExecSubteam.map((member) => (
          <div className="consultant-card" key={member.name}>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              {member.image && <img src={member.image} className="consultant-image" alt={member.name} />}
            </a>
            <p className="consultant-name">{member.name}</p>
            <p className="consultant-major">{member.major}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecSubMembers;
