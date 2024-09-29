import React from 'react';
import Home from "./pages/home/home";
import { AuthProvider } from './context/AuthContext';
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAccountPage from './pages/userAccountPage/userAccountPage';
import MentorAccountPage from './pages/mentorAccountPage/MentorAccountPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import FindTutor from './pages/findTutor/findTutor';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/account" element={<UserAccountPage />} />
        <Route path="/mentor/account" element={<MentorAccountPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutors" element={<FindTutor />} />
      </Routes>
    </Router>
    </AuthProvider> 
  );
}

export default App;
