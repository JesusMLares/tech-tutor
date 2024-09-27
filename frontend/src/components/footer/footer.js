import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-ft">
      <div className="footer-content-ft">
        <div className="footer-logo-ft">
          <img src="/img/tech.tutor-pc.png" alt="Tech Tutor Logo" />
        </div>
        <div className="footer-links-ft">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/tutors">Find a Tutor</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact-ft">
          <h3>Contact Us</h3>
          <p>Email: info@techtutor.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom-ft">
        <p>&copy; 2023 Tech Tutor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;