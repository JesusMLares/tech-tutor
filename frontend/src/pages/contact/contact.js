import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/navbar/navbar';
import AccountNav from '../../components/accounts/accountNav/accountNav';
import './contact.css';
import Footer from '../../components/footer/footer';

const Contact = () => {
  const { user } = useAuth();

  return (
    <div className="contact-page-ct">
      {user ? <AccountNav /> : <Navbar />}
      <div className="contact-container-ct">
        <h1>Contact Us</h1>
        
        <section className="faq-section-ct">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item-ct">
            <h3>Q: How can I schedule a tutoring session?</h3>
            <p>A: You can schedule a session by visiting our "Find a Tutor" page and selecting your preferred tutor and time slot.</p>
          </div>
          <div className="faq-item-ct">
          <h3>Q: What subjects do you offer tutoring in?</h3>
          <p>A: We offer tutoring in various programming languages and technologies, including HTML, CSS, JavaScript, Python, and React.js. Check our tutor profiles for details.</p>
          </div>
          <div className="faq-item-ct">
            <h3>Q: How long are the tutoring sessions?</h3>
            <p>A: Our standard sessions are 60 minutes long, but we offer flexibility based on your needs.</p>
          </div>
          <div className="faq-item-ct">
            <h3>Q: What is your cancellation policy?</h3>
            <p>A: We require 24 hours notice for cancellations. Late cancellations may be subject to a fee.</p>
          </div>
          <div className="faq-item-ct">
            <h3>Q: Do you offer group tutoring?</h3>
            <p>A: Yes, we offer both individual and group tutoring sessions. Contact us for more information on group rates.</p>
          </div>
        </section>
        
        <section className="contact-form-section-ct">
          <h2>Get in Touch</h2>
          <form action="https://formspree.io/f/xpwavdre" method="POST" className="contact-form-ct">
            <div className="form-group-ct">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group-ct">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group-ct">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn-ct">Send Message</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;