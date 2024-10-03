import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar-nb">
      <div className="navbar-container-nb">
        <Link to="/" className="navbar-logo-nb">
          <img src='/img/tech.tutor-pc.png' alt='Tech Tutor Logo' className='navbar-logo-img-nb' />
        </Link>
        <ul className="nav-menu-nb">
          <li className="nav-item-nb">
            <Link to="/" className="nav-links-nb">Home</Link>
          </li>
          <li className="nav-item-nb">
            <Link to="/tutors" className="nav-links-2-nb">Find Tutors</Link>
          </li>
          <li className="nav-item-nb">
            <Link to="/about" className="nav-links-nb">About</Link>
          </li>
          <li className="nav-item-nb">
            <Link to="/contact" className="nav-links-2-nb">Contact</Link>
          </li>
          <li className="nav-item-nb">
            <Link to="/login" className="sign-in-button-nb">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;