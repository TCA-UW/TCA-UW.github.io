import React from 'react';
import "../css/Members.css";
import Akshai from "../assets/headshots/akshai.png";
import Sumedh from "../assets/headshots/sumedh.png";
import Nico from "../assets/headshots/nico.png";
import Karah from "../assets/headshots/Karah.jpg";
import Primmy from "../assets/headshots/Primmy.jpg";
import Angie from "../assets/headshots/Angie.jpg";
import Simon from "../assets/headshots/Simon.jpg";

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
    name: "Nicolas Susanto",
    position: "Director of Outreach",
    major: "Computer Science & Entrepreneurship",
    image: Nico,
    linkedin: "https://www.linkedin.com/in/nicosusanto/"
  },
  {
    name: "Angie Niu",
    position: "Director of Consulting Operations",
    major: "Finance & Information Systems",
    image: Angie,
    linkedin: "https://www.linkedin.com/in/angieniu/"
  },
  {
    name: "Karah Kim",
    position: "Director of Marketing",
    major: "HR Management & Marketing",
    image: Karah,
    linkedin: "https://www.linkedin.com/in/karah-kim-a08420332/"
  },
  {
    name: "Simon Sun",
    position: "Director of Training Operations",
    major: "Finance & Information Systems",
    image: Simon,
    linkedin: "https://www.linkedin.com/in/simon-sun-45b04b335/"
  },
  {
    name: "Prim Wanaprapa",
    position: "Director of Membership",
    major: "Informatics",
    image: Primmy,
    linkedin: "https://www.linkedin.com/in/prim-singhasuvich-wanaprapa-48abaa27b/"
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
