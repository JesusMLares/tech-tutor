import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import './home.css'; 
import SponsorDivider from '../../components/sponsor/sponsorDivider';
import TutorDisplay from '../../components/tutorDisplay/tutorDisplay';
import Showcase from '../../components/showcase/showcase';
import { getMultipleRandomTutors } from '../../utils/tutorGenerator';
import Footer from '../../components/footer/footer';

function Home() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    async function fetchTutors() {
      const fetchedTutors = await getMultipleRandomTutors(10);
      setTutors(fetchedTutors);
    }
    fetchTutors();
  }, []);

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
          <div className="tutor-roll-container">
            <div className="tutor-roll">
              {tutors.map((tutor, index) => (
                <div key={index} className="tutor">
                  <img src={tutor.photo} alt={tutor.name} className="tutor-image" />
                  <h3>{tutor.name}</h3>
                  <p>Skills: {tutor.skills.join(', ')}</p>
                  <p>Rating: {tutor.rating}</p>
                </div>
              ))}
            </div>
            <div className="tutor-roll">
              {tutors.map((tutor, index) => (
                <div key={index + tutors.length} className="tutor">
                  <img src={tutor.photo} alt={tutor.name} className="tutor-image" />
                  <h3>{tutor.name}</h3>
                  <p>Skills: {tutor.skills.join(', ')}</p>
                  <p>Rating: {tutor.rating}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SponsorDivider />
      <Showcase />
      <TutorDisplay />
      <Footer />
    </div>
  );
}

export default Home;