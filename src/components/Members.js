import React from 'react';
import "../css/Members.css";
import Lucas from "../assets/headshots/lucas.png";
import Akshai from "../assets/headshots/akshai.png";
import Sumedh from "../assets/headshots/sumedh.png";
import Chris from "../assets/headshots/chris.png";
import Evan from "../assets/headshots/evan.png";
import Nico from "../assets/headshots/nico.png";
import Karah from "../assets/headshots/Karah.jpg";

const members = [
  {
    name: "Akshai Srinivasan",
    position: "President",
    major: "Computer Engineering & Applied Mathematics",
    image: Akshai,
    linkedin: "https://www.linkedin.com/in/akshaisrin/"
  },
  {
    name: "Evan Myers",
    position: "Vice President",
    major: "Physics",
    image: Evan,
    linkedin: "https://www.linkedin.com/in/evan-myers-011227298/"
  },
  {
    name: "Sumedh Chinta",
    position: "Director of Training Operations",
    major: "Finance & Information Systems",
    image: Sumedh,
    linkedin: "https://www.linkedin.com/in/sumedh910/"
  },
  {
    name: "Christopher Chen",
    position: "Director of Marketing",
    major: "Computer Science",
    image: Chris,
    linkedin: "https://www.linkedin.com/in/christopher-chen-56b889342/"
  },
  {
    name: "Lucas Varotto",
    position: "Director of Membership",
    major: "Computer Science",
    image: Lucas,
    linkedin: "https://www.linkedin.com/in/lucas-varotto-353bb729a/"
  },
  {
    name: "Nico Susanto",
    position: "Director of Outreach",
    major: "Computer Science",
    image: Nico,
    linkedin: "https://www.linkedin.com/in/nicosusanto/"
  },
  {
    name: "Karah Kim",
    position: "Associate Director of Marketing and Outreach",
    major: "HR Management & Marketing",
    image: Karah,
    linkedin: "https://www.linkedin.com/in/karah-kim-a08420332/"
  }
];

const Members = () => {
  return (
    <div className="members-container">
      <div className="levelOrganization">
        <h1>Executive Team</h1>
      </div>

      <div className="members-grid">
        {members.map((member) => (
          <div className="member-card" key={member.name}>
            <h6 className="member-position">{member.position}</h6>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={member.image} className="member-image" alt={member.name} />
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
