import React, { useState, useEffect } from 'react';
import { getMultipleRandomTutors } from '../../utils/tutorGenerator';
import './tutorDisplay.css';

const TutorCard = ({ name, photo, skills }) => (
    <div className="tutor-card">
      <img src={photo} alt={name} className="tutor-image" />
      <h3>{name}</h3>
      <div className="tutor-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );

const TutorDisplay = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTutors() {
      try {
        const randomTutors = await getMultipleRandomTutors(4);
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
    <div className="tutor-display">
      <h2>Tutors Ready to Guide You!</h2>
      <div className="tutor-grid">
        {tutors.map((tutor, index) => (
          <TutorCard key={index} {...tutor} />
        ))}
      </div>
    </div>
  );
};

export default TutorDisplay;