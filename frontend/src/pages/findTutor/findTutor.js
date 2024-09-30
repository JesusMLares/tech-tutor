import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { premadeTutors, getTutorsByLevel } from '../../utils/premadeTutors';
import './findTutor.css';

const FindTutor = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();

  const getFilteredTutors = () => {
    if (selectedLevel === 'Entry Level') {
      return getTutorsByLevel('Entry Level');
    }
    return getTutorsByLevel('Online');
  };

  const handleTutorClick = (tutor) => {
    navigate(`/tutor/${tutor.id}`);
  };

  const filteredTutors = getFilteredTutors();

  return (
    <div className="tutor-listing-page-td">
      <div className="tutor-listing-content-td">
        <aside className="tutor-filter-sidebar-td">
          <h2 className="filter-title-td">Filter by Level</h2>
          <div className="level-buttons-td">
            <button
              className={`level-button-td ${selectedLevel === 'Entry Level' ? 'active' : ''}`}
              onClick={() => setSelectedLevel(selectedLevel === 'Entry Level' ? null : 'Entry Level')}
            >
              Entry Level
            </button>
          </div>
        </aside>
        <main className="tutor-list-container-td">
          <h1 className="tutor-list-title-td">
            {selectedLevel === 'Entry Level' ? 'Entry Level Tutors' : 'Tutors Online Now'}
          </h1>
          <div className="tutor-grid-td">
            {filteredTutors.map((tutor) => (
              <div key={tutor.id} className="tutor-card-td" onClick={() => handleTutorClick(tutor)}>
                <img src={tutor.photo} alt={tutor.name} className="tutor-image-td" />
                <h3 className="tutor-name-td">{tutor.name}</h3>
                <div className="tutor-skills-td">
                  {tutor.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag-td">{skill}</span>
                  ))}
                </div>
                <p className="tutor-rating-td">
                    Rating: {typeof tutor.rating === 'number' ? tutor.rating.toFixed(1) : 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FindTutor;