import React from "react";
import "./AppointmentCard.css";
//import { AppointmentContext } from '../../../context/AppointmentContext

function AppointmentCard() {
  return (
    <div className="custom-card">
      <div className="custom-card-info">
        <img src="/img/pc-tech.tutor-bg.png" className="custom-card-image" alt="Mentor" />
        <div className="custom-card-details">
          <h1 className="custom-card-name">Mentor Name</h1>
          <p className="custom-card-skills">JavaScript, Python</p>
        </div>
        <p className="custom-card-date">12-24-24</p>
      </div>
    </div>
  );
}

export default AppointmentCard;

