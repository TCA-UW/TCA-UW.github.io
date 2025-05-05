import React from 'react';
import "../css/Consultants.css";
import PM1 from "../assets/headshots/Brianna.jpg";
import PM2 from "../assets/headshots/Gus.jpg";
import PM3 from "../assets/headshots/Helen.jpg";
import TT1 from "../assets/headshots/ChloeG.jpg";
import TT2 from "../assets/headshots/Jessica.jpg";
import TT3 from "../assets/headshots/Ulysses.jpeg";
import TT4 from "../assets/headshots/Bhavya.jpg";
import TT5 from "../assets/headshots/Jonathan.jpg";
import TT6 from "../assets/headshots/Vainavi.jpg";
import BT1 from "../assets/headshots/Kian.jpg";
import BT2 from "../assets/headshots/Ishan.jpg";
import BT3 from "../assets/headshots/Justin.jpg";
import BT4 from "../assets/headshots/Angie.jpg";
import BT5 from "../assets/headshots/Tashia.jpg";
import BT6 from "../assets/headshots/Tristan.jpeg";
import BT7 from "../assets/headshots/Justin.jpg";
import BT8 from "../assets/headshots/Simon.jpg";
import BT9 from "../assets/headshots/ChloeC.jpg";

const consultants = {
  projectManagers: [
    { name: "Brianna Zhou", major: "Information Systems", image: PM1, linkedin: "https://www.linkedin.com/in/brianna-zhou/" },
    { name: "Gus Abramowitz", major: "Business Administration & Informatics", image: PM2, linkedin: "https://www.linkedin.com/in/gus-abramowitz-4328122aa/" },
    { name: "Helen Wu", major: "Informatics", image: PM3, linkedin: "https://www.linkedin.com/in/heleninformation/" }
  ],
  techTeam: [
    { name: "Chloe Gao", major: "Applied Mathematics & Data Science", image: TT1, linkedin: "https://www.linkedin.com/in/chloejgao/" },
    { name: "Jessica Chendra", major: "Informatics & Marketing", image: TT2, linkedin: "https://www.linkedin.com/in/jessica-chendra-a8a0a8207/" },
    { name: "Ulysses Vasquez-Perez", major: "Accounting & Information Systems", image: TT3, linkedin: "https://www.linkedin.com/in/ulysses-vazquez/" },
    { name: "Bhavya Rajput", major: "Informatics & Finance", image: TT4, linkedin: "https://www.linkedin.com/in/bhavya-rajput-644217256/" },
    { name: "Jonathan Herdianshah", major: "Informatics & Statistics", image: TT5, linkedin: "https://www.linkedin.com/in/jonathanherdianshah/" },
    { name: "Vainavi Thakkar", major: "Computer Science", image: TT6, linkedin: "https://www.linkedin.com/in/vainavithakkar24/" }
  ],
  businessTeam: [
    { name: "Kian Gaskill", major: "Business Administration", image: BT1, linkedin: "https://www.linkedin.com/in/kian-gaskill-301954348/" },
    { name: "Ishan Kamran", major: "Finance & Information Systems", image: BT2, linkedin: "https://www.linkedin.com/in/ishankamran/" },
    { name: "Justin Tu", major: "Finance & Accounting for Businesses", image: BT3, linkedin: "https://www.linkedin.com/in/tu-justin/" },
    { name: "Angie Niu", major: "Finance & Information Systems", image: BT4, linkedin: "https://www.linkedin.com/in/angieniu/" },
    { name: "Tashia Lo", major: "Operations and Supply Chain & Marketing", image: BT5, linkedin: "https://www.linkedin.com/in/natashialo/" },
    { name: "Tristan Tang", major: "Finance & Marketing", image: BT6, linkedin: "https://www.linkedin.com/in/tristan-tang6/" },
    { name: "Ethan Ohlson", major: "Business Supply Chain & Marketing", image: BT7, linkedin: "https://www.linkedin.com/in/ethan-ohlson-274615240/" },
    { name: "Simon Sun", major: "Finance & Information Systems", image: BT8, linkedin: "https://www.linkedin.com/in/simon-sun-45b04b335/" },
    { name: "Chloe Chai", major: "Accounting & Economics", image: BT9, linkedin: "https://www.linkedin.com/in/chloe-chai/" }
  ]
};

const Consultants = () => {
  return (
    <div className="consultants-container">
      <div className="levelOrganizationConsultants">
        <h1>Consultants</h1>
      </div>

      <div className="levelOrganizationConsultants">
        <h3>Project Managers</h3>
      </div>

      <div className="consultants-grid">
        {consultants.projectManagers.map((consultant) => (
            <div className="consultant-card" key={consultant.name}>
              <a href={consultant.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={consultant.image} className="consultant-image" alt={consultant.name} />
              </a>
              <p className="consultant-name">{consultant.name}</p>
              <p className="consultant-major">{consultant.major}</p>
            </div>
          ))}
      </div>

      <div className="levelOrganizationConsultants">
        <h3>Tech Team</h3>
      </div>

      <div className="consultants-grid">
        {consultants.techTeam.map((consultant) => (
            <div className="consultant-card" key={consultant.name}>
              <a href={consultant.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={consultant.image} className="consultant-image" alt={consultant.name} />
              </a>
              <p className="consultant-name">{consultant.name}</p>
              <p className="consultant-major">{consultant.major}</p>
            </div>
          ))}
      </div>

      <div className="levelOrganizationConsultants">
        <h3>Business Team</h3>
      </div>

      <div className="consultants-grid">
        {consultants.businessTeam.map((consultant) => (
            <div className="consultant-card" key={consultant.name}>
              <a href={consultant.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={consultant.image} className="consultant-image" alt={consultant.name} />
              </a>
              <p className="consultant-name">{consultant.name}</p>
              <p className="consultant-major">{consultant.major}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Consultants;
