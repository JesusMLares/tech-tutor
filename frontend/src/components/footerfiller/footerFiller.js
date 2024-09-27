import React from 'react';
import './footerFiller.css';

const FooterFiller = () => {
  return (
    <div className="footer-filler-ff">
      <div className="footer-filler-content-ff">
        <section className="cta-section-ff">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p className='cta-p-ff'>Join thousands of students already learning with Tech Tutor</p>
          <button className="cta-button-ff">Get Started Today</button>
        </section>

        <section className="stats-section-ff">
          <div className="stat-item-ff">
            <h3>10,000+</h3>
            <p>Students Taught</p>
          </div>
          <div className="stat-item-ff">
            <h3>500+</h3>
            <p>Expert Tutors</p>
          </div>
          <div className="stat-item-ff">
            <h3>95%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </section>

        <section className="newsletter-section-ff">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest tech tutorials and career tips</p>
          <form className="newsletter-form-ff">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FooterFiller;