import React from "react";
import AccountNav from "../accountNav/accountNav";
import "./Mentor.css";

function MentorAccount() {
  return (
    <div className="mentor-account-container">
      <AccountNav />
      <div className="center-mentor-boxes">
        <div className="mentor-grid-layout">
          <div className="mentor-account-info-container">
            <h1 className="mentor-account-header">Account Information</h1>
            <p>
              <strong>UserName:</strong> JohnDoe
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
          </div>
          <div className="mentor-appointment-container">
            <h1 className="mentor-appointment-header">Appointment Times</h1>
            <ul>
              <li>September 28, 10:00 AM (With Mentor Name)</li>
              <li>October 5, 1:30 PM (With Mentor Name)</li>
              <li>October 12, 4:00 PM (With Mentor Name)</li>
            </ul>
          </div>
          <div className="mentor-skills-container">
            <h1 className="mentor-skills-header">Mentor Skills</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorAccount;