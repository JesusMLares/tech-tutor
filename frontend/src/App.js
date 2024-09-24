import React from 'react';
import Home from "./pages/home/home";
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from './pages/accountPage/accountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
