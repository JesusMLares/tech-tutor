import React from 'react';
import Home from "./pages/home/home";
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAccountPage from './pages/userAccountPage/userAccountPage';
import MentorAccountPage from './pages/mentorAccountPage/MentorAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/account" element={<UserAccountPage />} />
        <Route path="/mentor/account" element={<MentorAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
