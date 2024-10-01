import React from "react";
import Home from "./pages/home/home";
import { AuthProvider } from './context/AuthContext';
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserAccountPage from "./pages/userAccountPage/userAccountPage";
import MentorAccountPage from "./pages/mentorAccountPage/MentorAccountPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import PaymentPage from "./pages/payment/PaymentView";
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import PaymentSuccessPage from "./pages/paymentSuccessView/PaymentSuccessView";
import { AppointmentProvider } from "./context/AppointmentContext";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
        </Routes>
      </Router>
    </AppointmentProvider>
    </AuthProvider> 

  );
}

export default App;