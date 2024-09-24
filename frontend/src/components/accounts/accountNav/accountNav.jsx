import React from 'react';
import { Link } from 'react-router-dom';
import './accountNav.css';

function AccountNav() {
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
            <Link to="/mentors" className="nav-links-2">Find Mentors</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links-2">Contact</Link>
          </li>
          <li className="nav-item">
          <button className="log-out-button" onClick={() => alert("Logged Out")}>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AccountNav;