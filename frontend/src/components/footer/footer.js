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
        <div className="github-info-ft">
          <a href="https://github.com/JesusMLares/tech-tutor"       target="_blank"     rel="noopener noreferrer">
            <img src="/img/github-logo-2.png" alt="GitHub" className="github-logo-ft" />
            View on GitHub
          </a>
          <p>Created by: Anthony Ghilardi | Jesus Lares | David A Vargas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;