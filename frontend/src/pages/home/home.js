import React from 'react';
import Navbar from '../../components/navbar/navbar';
import home from './home.css';
import SponsorDivider from '../../components/sponsor/sponsorDivider';
import TutorDisplay from '../../components/tutorDisplay/tutorDisplay';
import Showcase from '../../components/showcase/showcase';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <div className="home-left">
          <p className='home-slogan'>Learn to code and innovate, with a guide to help you elevate Tech Tutor</p>
          <h1 className="home-title">1-on-1 Guidance</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for mentors or skills..."
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="home-right">
          {/* for the animation for the mentors */} 
        </div>
      </div>
      <SponsorDivider />
      <Showcase />
      <TutorDisplay />
    </div>
  );
}

export default Home;