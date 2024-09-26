import React from 'react';
import Home from "./pages/home/home";
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAccountPage from './pages/userAccountPage/userAccountPage';
import MentorAccountPage from './pages/mentorAccountPage/MentorAccountPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import CheckOutPage from './pages/checkoutPage/CheckOutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/account" element={<UserAccountPage />} />
        <Route path="/mentor/account" element={<MentorAccountPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
