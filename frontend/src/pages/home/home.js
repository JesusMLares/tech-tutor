import React from 'react';
import Navbar from '../../components/navbar/navbar';
import home from './home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <div className="home-left">
          <p className='home-slogan'>Learn to code and innovate, with a guide to help you elevate Tech Tutor</p>
          <h1 className="home-title">1 on 1 Mentorship</h1>
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
    </div>
  );
}

export default Home;