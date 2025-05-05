import React from "react";
import "../css/Subteams.css";
import SubteamsImage from "../assets/Subteam1.jpg";

const Subteams = () => {
  return (
    <div className="subteams-container">
      <h1 className="subteams-title">Subteams</h1>
      <img src={SubteamsImage} alt="About us" className="about-image" />
      <p className="subteams-info">
      Each engagement will have a project manager, a tech subteam, and a business subteam. The tech and business subteams will collaborate heavily 
      to create a solution for the client, but each subteam has a different focus (described below). However, there is still lots of overlap between
      subteams through various phases of the client project like the discovery phase, the initial research phase, etc. Please note that you can only join one subteam.
      </p>

      <div className="subteam">
        <h2 className="subteam-title">Tech</h2>
        <p className="subteam-info">
        The tech subteam focuses primarily on system design and designing the software/technology that will be used to solve the client's problem. This subteam is highly technical, 
        handling architecture, potential code implementation, and ensuring the client's solution is scalable and efficient.
        </p>
      </div>

      <div className="subteam">
        <h2 className="subteam-title">Business</h2>
        <p className="subteam-info">
          The business subteam focuses primarily on validating the tech solution and performing market research and data analysis, ensuring it aligns with customer needs and 
          business goals. They also handle pricing strategies, competitor analysis, and identifying potential revenue streams to support the solution's success.
        </p>
      </div>

      <div className="subteam">
        <h2 className="subteam-title">Project Management</h2>
        <p className="subteam-info">
        Project managers are the main point of contact between the TCA executive team, the clients, and the consultants themselves. This is a very leadership-heavy role and 
        project managers must coordinate tasks, manage timelines, and ensure clear communication across all parties. They also oversee project progress, resolve any issues that
        arise, and ensure that deliverables meet quality standards and client expectations.
        </p>
      </div>
    </div>
  );
};

export default Subteams;
