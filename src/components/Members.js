import React from 'react';
import "../css/Members.css";
import Akshai from "../assets/headshots/akshai.png";
import Sumedh from "../assets/headshots/sumedh.png";
import ChloeG from "../assets/headshots/ChloeG.jpg";
import Karah from "../assets/headshots/Karah.jpg";
import Primmy from "../assets/headshots/Primmy.jpg";
import Angie from "../assets/headshots/Angie.jpg";
import Simon from "../assets/headshots/Simon.jpg";
import Hannah from "../assets/headshots/Hannah.jpg";
import Bhavya from "../assets/headshots/Bhavya.png";
import Justin from "../assets/headshots/Justin.jpg";

const members = [
  {
    name: "Akshai Srinivasan",
    position: "Co-President",
    major: "Computer Engineering & Applied Mathematics",
    image: Akshai,
    linkedin: "https://www.linkedin.com/in/akshaisrin/"
  },
  {
    name: "Sumedh Chinta",
    position: "Co-President",
    major: "Finance & Information Systems",
    image: Sumedh,
    linkedin: "https://www.linkedin.com/in/sumedh910/"
  },
  {
    name: "Chloe Gao",
    position: "Director of Outreach",
    major: "Applied Mathematics & Data Science",
    image: ChloeG,
    linkedin: "https://www.linkedin.com/in/chloejgao/"
  },
  {
    name: "Angie Niu",
    position: "Director of Consulting Operations",
    major: "Finance & Information Systems",
    image: Angie,
    linkedin: "https://www.linkedin.com/in/angieniu/"
  },
  {
    name: "Bhavya Rajput",
    position: "Director of Marketing",
    major: "Informatics",
    image: Bhavya,
    linkedin: "https://www.linkedin.com/in/bhavya-rajput-644217256/"
  },
  {
    name: "Simon Sun",
    position: "Director of Analyst Development",
    major: "Finance & Information Systems",
    image: Simon,
    linkedin: "https://www.linkedin.com/in/simon-sun-45b04b335/"
  },
  {
    name: "Hannah Lee",
    position: "Director of MLE Development",
    major: "Computer Science",
    image: Hannah,
    linkedin: "https://www.linkedin.com/in/hannahstarlee/"
  },
  {
    name: "Prim Wanaprapa",
    position: "Director of Membership",
    major: "Informatics",
    image: Primmy,
    linkedin: "https://www.linkedin.com/in/prim-singhasuvich-wanaprapa-48abaa27b/"
  },
  {
    name: "Karah Kim",
    position: "Director of Professional Development",
    major: "HR Management & Marketing",
    image: Karah,
    linkedin: "https://www.linkedin.com/in/karah-kim-a08420332/"
  },
  {
    name: "Justin Tu",
    position: "Director of Finance",
    major: "Finance & Accounting for Business",
    image: Justin,
    linkedin: "https://www.linkedin.com/in/tu-justin/"
  }
];

const Members = () => {
  return (
    <div className="members-container">
      <div className="members-header-section">
        <h1 className="members-title">Executive Team</h1>
        <div className="members-title-line"></div>
      </div>

      <div className="members-grid">
        {members.map((member, index) => (
          <div className="member-card" key={member.name}>
            <h6 className="member-position">{member.position}</h6>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${member.name}'s LinkedIn`}
            >
              <div className="member-image-container">
                <img
                  src={member.image}
                  className="member-image"
                  alt={`${member.name} headshot`}
                  width={300}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index < 4 ? "high" : "low"}
                />
              </div>
            </a>
            <p className="member-name">{member.name}</p>
            <p className="member-major">{member.major}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
