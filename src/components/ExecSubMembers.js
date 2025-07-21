import React from 'react';
import "../css/Consultants.css"; 
import Jonathan from "../assets/headshots/Jonathan.jpg";
import Bhavya from "../assets/headshots/Bhavya.jpg";
import Jessica from "../assets/headshots/Jessica.jpg";
import Gus from "../assets/headshots/Gus.jpg";
import ChloeG from "../assets/headshots/ChloeG.jpg";
import Hannah from "../assets/headshots/Hannah.jpg";
import Tristan from "../assets/headshots/Tristan.jpeg";
import Tatevik from "../assets/headshots/Tatevik.jpg";
import Roman from "../assets/headshots/Roman.jpg";

const subExecs = {
  marketingExecutiveSubteam: [
    { name: "Bhavya Rajput", major: "Informatics", image: Bhavya, linkedin: "https://www.linkedin.com/in/bhavya-rajput-644217256/" },
    { name: "Jessica Chendra", major: "Finance & Information Systems", image: Jessica, linkedin: "https://www.linkedin.com/in/jessica-chendra-a8a0a8207/" }
  ],
  outreachExecutiveSubteam: [
    { name: "Gus Abramowitz", major: "Information Systems", image: Gus, linkedin: "https://www.linkedin.com/in/gus-abramowitz-4328122aa/" },
    { name: "Chloe Gao", major: "Applied Mathematics & Data Science", image: ChloeG, linkedin: "https://www.linkedin.com/in/chloejgao/" },
    { name: "Roman Nekrasov", major: "Informatics", image: Roman, linkedin: "https://www.linkedin.com/in/romannekrasov/" }
  ],
  trainingOperationsExecutiveSubteam: [
    { name: "Hannah Lee", major: "Computer Science", image: Hannah, linkedin: "https://www.linkedin.com/in/hannahstarlee/" },
    { name: "Tristan Tang", major: "Finance & Marketing", image: Tristan, linkedin: "https://www.linkedin.com/in/tristan-tang6/" },
    { name: "Tatevik Poghosyan", major: "Computer Science", image: Tatevik, linkedin: "https://www.linkedin.com/in/tatevik-poghosyan-90349a352/" }
  ],
  webmaster: [
    { name: "Jonathan Herdianshah", major: "Informatics & Economics", image: Jonathan, linkedin: "https://www.linkedin.com/in/jonathanherdianshah/" }
  ]
};

const ExecSubMembers = () => {
  return (
    <div className="consultants-container">
      <div className="levelOrganizationConsultants">
        <h1>Executive Subteams</h1>
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
        <h3>Training Operations Executive Subteam</h3>
      </div>
      <div className="consultants-grid">
        {subExecs.trainingOperationsExecutiveSubteam.map((member) => (
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
        <h3>Webmaster</h3>
      </div>
      <div className="consultants-grid">
        {subExecs.webmaster.map((member) => (
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
