import React from 'react';
import './footerFiller.css';

const FooterFiller = () => {
  return (
    <div className="footer-filler">
      <div className="footer-filler-content">
        <section className="cta-section">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students already learning with Tech Tutor</p>
          <button className="cta-button">Get Started Today</button>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Students Taught</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Expert Tutors</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </section>

        <section className="newsletter-section">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest tech tutorials and career tips</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FooterFiller;