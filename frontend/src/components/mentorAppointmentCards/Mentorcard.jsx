import React from "react";
import "./MentorCard.css";
//import { AppointmentContext } from '../../../context/AppointmentContext

function MentorAppointmentCard() {
  return (
    <div className="custom-mentor-card">
      <div className="custom-mentor-card-info">
        <img src="/img/pc-tech.tutor-bg.png" className="custom-mentor-card-image" alt="Mentor" />
        <div className="custom-mentor-card-details">
          <h1 className="custom-mentor-card-name">Mentee Name</h1>
          <p className="custom-mentor-card-skills">JavaScript, Python</p>
        </div>
        <p className="custom-mentor-card-date">12-24-24</p>
      </div>
    </div>
  );
}

export default MentorAppointmentCard;