import React, { createContext, useState } from "react";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    firstName: "",
    lastName: "",
    appointmentDate: "",
    mentor: "",
  });

  return (
    <AppointmentContext.Provider value={{ appointmentDetails, setAppointmentDetails }}>
      {children}
    </AppointmentContext.Provider>
  );
};