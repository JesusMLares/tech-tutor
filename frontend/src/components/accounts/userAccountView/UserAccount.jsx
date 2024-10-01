import React from "react";
import AccountNav from "../accountNav/accountNav";
import "./Account.css";
import AppointmentCard from "../loginAppointmentCards/AppointmentCard";

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
            <h1 className="user-account-header">Your Appointments</h1>
            <AppointmentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
