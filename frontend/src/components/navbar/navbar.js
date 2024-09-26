import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src='/img/tech.tutor-pc.png' alt='Tech Tutor Logo' className='navbar-logo-img' />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/tutors" className="nav-links-2">Find Tutors</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links-2">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="sign-in-button">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;