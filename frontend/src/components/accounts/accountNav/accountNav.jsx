import React from 'react';
import { Link } from 'react-router-dom';
import './accountNav.css';
import { useNavigate } from "react-router-dom";

function AccountNav() {
  const navigate = useNavigate();

  function logOut() {
    // Add additional logic for logging the user out 
    navigate("/");
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src='/img/pc-tech.tutor-bg.png' alt='Tech Tutor Logo' className='navbar-logo-img' />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/tutors" className="nav-links-2-nb">Find Tutors</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links-2">Contact</Link>
          </li>
          <li className="nav-item">
          {/* <button className="log-out-button" onClick={() => navigate("/")}>Log Out</button> */}
          <button className="log-out-button" onClick={logOut}>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AccountNav;