import React from "react";
import Home from "./pages/home/home";
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAccountPage from "./pages/userAccountPage/userAccountPage";
import MentorAccountPage from "./pages/mentorAccountPage/MentorAccountPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import PaymentPage from "./pages/payment/PaymentView";
import PaymentSuccessPage from "./pages/paymentSuccessView/PaymentSuccessView";
import { AppointmentProvider } from "./context/AppointmentContext";

function App() {
  return (
    <AppointmentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/account" element={<UserAccountPage />} />
          <Route path="/mentor/account" element={<MentorAccountPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<PaymentSuccessPage />} />
        </Routes>
      </Router>
    </AppointmentProvider>
  );
}

export default App;