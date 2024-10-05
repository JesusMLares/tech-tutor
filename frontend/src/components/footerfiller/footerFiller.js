import React, { useState } from 'react';
import './footerFiller.css';
import { useNavigate } from 'react-router-dom';

const FooterFiller = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xpwavdre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          formType: 'newsletter'
        }),
      });

      if (response.ok) {
        alert('Thank you for subscribing!');
        setEmail('');
      } else {
        alert('There was an error. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div className="footer-filler-ff">
      <div className="footer-filler-content-ff">
        <section className="cta-section-ff">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p className='cta-p-ff'>Join thousands of students already learning with Tech Tutor</p>
          <button className="cta-button-ff" onClick={() => navigate('/signUp')} >Get Started Today</button>
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
          <form className="newsletter-form-ff" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FooterFiller;