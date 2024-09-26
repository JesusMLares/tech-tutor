import React from 'react';
import './showcase.css';

const TutorCard = ({ name, title, price, features, imageUrl }) => (
  <div className="tutor-card-sc">
    <img src={imageUrl} alt={name} className="tutor-image-sc" />
    <h3>{name}</h3>
    <p className="tutor-title-sc">{title}</p>
    <p className="tutor-price-sc">${price}/month</p>
    <ul className="tutor-features-sc">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const Showcase = () => {
  return (
    <div className="showcase-container">
      <section className="tutor-showcase-sc">
        <h2>Connect with Expert Tutors, Unlock Your Potential</h2>
        <div className="tutor-grid-sc">
          <TutorCard 
            name="Benjamin Kaiser"
            title="Principal Software Engineer"
            price={240}
            features={["Intro Session", "CV Review", "Expert Session"]}
            imageUrl="https://xsgames.co/randomusers/avatar.php?g=male&12345"
          />
          <TutorCard 
            name="Nima Tajbakhsh"
            title="Deep Learning Lead"
            price={150}
            features={["Intro Session", "Project Guidance", "Expert Session"]}
            imageUrl="https://xsgames.co/randomusers/avatar.php?g=female&67890"
          />
        </div>

        <div className="showcase-benefits">
          <h3>Your Journey to Success Starts with the Right Guide</h3>
          <p>At Tech Tutor, we connect you with experienced tutors from various industries to help you achieve your career goals, develop new skills, or navigate challenges in your startup journey. Gain insights, receive personalized feedback, and grow professionally with our dedicated tutors by your side.</p>
          <ul className="benefits-list">
            <li>Access to top-tier tutors from around the globe</li>
            <li>Customized learning paths and flexible schedules</li>
            <li>One-on-one video calls and real-time messaging</li>
            <li>Free initial consultation with tutors</li>
            <li>Proven success with a 96% satisfaction rate</li>
          </ul>
          <button className="cta-button">Find Your Tutor</button>
        </div>

        <div className="testimonial">
          <p>"With the guidance I received from my tutor on Tech Tutor, I transitioned into a software engineering role at Apple. The experience was invaluable and life-changing!"</p>
          <p className="testimonial-author">- Michele Verriello</p>
        </div>

        <section className="become-tutor">
          <h2>Ready to Share Your Expertise?</h2>
          <p>If you're passionate about teaching and want to help others reach their potential, join our community of skilled tutors. Set your own schedule, teach what you love, and make an impact today.</p>
          <button className="cta-button">Become a Tutor</button>
        </section>
      </section>
    </div>
  );
};

export default Showcase;