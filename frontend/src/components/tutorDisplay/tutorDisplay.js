import React, { useState, useEffect } from 'react';
import { getMultipleRandomTutors } from '../../utils/tutorGenerator';
import './tutorDisplay.css';

const TutorCard = ({ name, photo, skills, rating }) => (
    <div className="tutor-card-td">
      <img src={photo} alt={name} className="tutor-image-td" />
      <h3>{name}</h3>
      <div className="tutor-skills-td">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag-td">{skill}</span>
        ))}
      </div>
      <p className="tutor-rating-td">Rating: {rating} / 5.0</p>
    </div>
  );

const TutorDisplay = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTutors() {
      try {
        const randomTutors = await getMultipleRandomTutors(12);
        setTutors(randomTutors);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTutors();
  }, []);

  if (loading) {
    return <div>Loading tutors...</div>;
  }

  return (
    <div className="tutor-display-page-td">
    <div className="tutor-display-td">
      <div className="tutor-display-header-td">
        <h2>Explore 500+ Available Mentors</h2>
        <p>Find the perfect tutor to guide you on your learning journey</p>
      </div>
      <div className="tutor-grid-td">
        {tutors.map((tutor, index) => (
          <TutorCard key={index} {...tutor} />
        ))}
      </div>
      <div className="view-all-tutors-td">
        <button className="view-all-button-td">View All Tutors</button>
      </div>
    </div>
    </div>
  );
};

export default TutorDisplay;