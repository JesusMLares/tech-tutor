import React from "react";
import AccountNav from "../accountNav/accountNav";
import "./Account.css";

function UserAccount() {
  return (
    <div className="user-account-container">
      <AccountNav />
      <div className="center-account-boxes">
        <div className="user-grid-layout">
          <div className="user-account-info-container">
            <h1 className="user-account-header">Account Information</h1>
            <p>
              <strong>UserName:</strong> JohnDoe
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
          </div>
          <div className="user-appointment-container">
            <h1 className="user-appointment-header">Appointment Times</h1>
            <ul className="appointment-items">
              <li>September 28, 10:00 AM (With Mentor Name)</li>
              <li>October 5, 1:30 PM (With Mentor Name)</li>
              <li>October 12, 4:00 PM (With Mentor Name)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
