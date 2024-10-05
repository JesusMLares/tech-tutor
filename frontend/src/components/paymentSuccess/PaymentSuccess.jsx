import React, { useContext, useEffect } from "react";
import { AppointmentContext } from "../../context/AppointmentContext";
import "./paymentSucess.css";
import AccountNav from "../accounts/accountNav/accountNav";

function PaymentSucess() {
  const { appointmentDetails } = useContext(AppointmentContext);
  const { appointmentDate, mentor } = appointmentDetails;

  return (
    <div>
      <>
        <AccountNav />
      </>
      <div className="confirmation-main-container">
        <h1>Thank you for booking an Appointment with Tech Tutor!</h1>
        <div className="custom-info-container">
          <h2>Appointment details</h2>
          <p>{`With: ${mentor}`}</p>
          <p>{`Appointment Date: ${appointmentDate}`}</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSucess;