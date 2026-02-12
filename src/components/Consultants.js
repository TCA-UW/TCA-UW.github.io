import React from 'react';
import "../css/Consultants.css";
import PM1 from "../assets/headshots/Brianna.jpg";
import PM2 from "../assets/headshots/Gus.jpg";
import PM3 from "../assets/headshots/Helen.jpg";
import TT1 from "../assets/headshots/ChloeG.jpg";
import TT2 from "../assets/headshots/Jessica.jpg";
import TT3 from "../assets/headshots/Ulysses.jpeg";
import BT1 from "../assets/headshots/Kian.jpg";
import Tashia from "../assets/headshots/Tashia.png";
import BT9 from "../assets/headshots/ChloeC.jpg";
import Bhavya from "../assets/headshots/Bhavya.png";
import Ananya from "../assets/headshots/Ananya.png";
import Prisha from "../assets/headshots/Prisha.png";
import Tanishka from "../assets/headshots/Tanishka.png";
import Dylan from "../assets/headshots/Dylan.png";
import Aanika from "../assets/headshots/Aanika.png";
import Joelle from "../assets/headshots/Joelle.png";
import Jonathan from "../assets/headshots/Jonathan.png";
import Tristan from "../assets/headshots/Tristan.png";
import Cai from "../assets/headshots/Cai.png";
import Calista from "../assets/headshots/Calista.png";
import Tatevik from "../assets/headshots/Tatevik.jpg";
import Hannah from "../assets/headshots/Hannah.jpg";
import placeholder from "../assets/headshots/placeholder.jpg";
import Ivonne from "../assets/headshots/Ivonne.jpg";

const cohorts = [
  {
    name: "Spring 2025 Cohort",
    projectManagers: [
      { name: "Brianna Zhou", major: "Informatics", image: PM1, linkedin: "https://www.linkedin.com/in/brianna-zhou/" },
      { name: "Gus Abramowitz", major: "Information Systems", image: PM2, linkedin: "https://www.linkedin.com/in/gus-abramowitz-4328122aa/" },
      { name: "Helen Wu", major: "Informatics", image: PM3, linkedin: "https://www.linkedin.com/in/heleninformation/" },
      { name: "Bhavya Rajput", major: "Informatics", image: Bhavya, linkedin: "https://www.linkedin.com/in/bhavya-rajput-644217256/" },
      { name: "Kian Gaskill", major: "Business Administration", image: BT1, linkedin: "https://www.linkedin.com/in/kian-gaskill-301954348/" },
    ],
    techTeam: [
      { name: "Chloe Gao", major: "Applied Mathematics & Data Science", image: TT1, linkedin: "https://www.linkedin.com/in/chloejgao/" },
      { name: "Jessica Chendra", major: "Informatics & Marketing", image: TT2, linkedin: "https://www.linkedin.com/in/jessica-chendra-a8a0a8207/" },
      { name: "Ulysses Vasquez-Perez", major: "Accounting & Information Systems", image: TT3, linkedin: "https://www.linkedin.com/in/ulysses-vazquez/" },
      { name: "Jonathan Herdianshah", major: "Informatics & Economics", image: Jonathan, linkedin: "https://www.linkedin.com/in/jonathanherdianshah/" },
      { name: "Tatevik Poghosyan", major: "Informatics", image: Tatevik, linkedin: "https://www.linkedin.com/in/tatevik-poghosyan-90349a352/" },
      { name: "Hannah Lee", major: "Computer Science", image: Hannah, linkedin: "https://www.linkedin.com/in/hannahstarlee/" },
    ],
    businessTeam: [
      { name: "Natashia Lo", major: "Operations and Supply Chain & Marketing", image: Tashia, linkedin: "https://www.linkedin.com/in/natashialo/" },
      { name: "Tristan Tang", major: "Finance & Marketing", image: Tristan, linkedin: "https://www.linkedin.com/in/tristan-tang6/" },
      { name: "Chloe Chai", major: "Accounting & Economics", image: BT9, linkedin: "https://www.linkedin.com/in/chloe-chai/" }
    ]
  },
  {
    name: "Fall 2025 Cohort",
    projectManagers: [],
    techTeam: [
      { name: "Ananya Prakash", major: "Computer Science", image: Ananya, linkedin: "https://www.linkedin.com/in/apraka/" },
      { name: "Prisha Shah", major: "Computer Science", image: Prisha, linkedin: "https://www.linkedin.com/in/prisha-shah-9b501a1b3/" },
      { name: "Ren Pei Cai", major: "Computer Science", image: Cai, linkedin: "https://www.linkedin.com/in/ren-pei-cai-9a9625249/"},
      { name: "Calista Vidianto", major: "Computer Science", image: Calista, linkedin: "https://www.linkedin.com/in/calista-vidianto-488778329/"},
      { name: "Ivonne Zhang", major: "Applied & Computational Mathematics", image: Ivonne, linkedin: "https://www.linkedin.com/in/yimenz5/"},
      { name: "Owen Mulholland", major: "Computer Science", image: placeholder, linkedin: "https://www.linkedin.com/in/owen-mulholland-030132314/"},
    ],
    businessTeam: [
      { name: "Tanishka Goplani", major: "Finance & Bioengineering", image: Tanishka, linkedin: "https://www.linkedin.com/in/tanishka-goplani/" },
      { name: "Dylan Song", major: "Informatics & Business", image: Dylan, linkedin: "https://www.linkedin.com/in/dylan-song/" },
      { name: "Aanika Nakra", major: "Informatics & Business", image: Aanika, linkedin: "https://www.linkedin.com/in/aanika-nakra/" },
      { name: "Joelle Liu", major: "Informatics", image: Joelle, linkedin: "https://www.linkedin.com/in/joelle-liu-35a931252/" },
      { name: "Ben Nguyen", major: "Informatics & Economics", image: placeholder, linkedin: "https://www.linkedin.com/in/akben/"},
    ]
  }
];

const Consultants = () => {
  let imageIndex = 0;
  return (
    <div className="consultants-container">
      <div className="consultants-header-section">
        <h1 className="consultants-title">Consultants</h1>
        <div className="consultants-title-line"></div>
      </div>

      {cohorts.map((cohort) => {
        const consultants = [
          ...cohort.projectManagers,
          ...cohort.techTeam,
          ...cohort.businessTeam,
        ];
        return (
          <div key={cohort.name} className="consultants-cohort">
            <h2 className="consultants-cohort-title">{cohort.name}</h2>
            <div className="consultants-grid consultants-grid-4">
              {consultants.map((consultant) => {
                const idx = imageIndex++;
                return (
                  <div className="consultant-card" key={`${cohort.name}-${consultant.name}`}>
                    <p className="consultant-name">{consultant.name}</p>
                    <a href={consultant.linkedin} target="_blank" rel="noopener noreferrer">
                      <img
                        src={consultant.image}
                        className="consultant-image"
                        alt={consultant.name}
                        width={300}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        fetchPriority={idx < 4 ? "high" : "low"}
                      />
                    </a>
                    <p className="consultant-major">{consultant.major}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Consultants;
