import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../context/CurrentUser';
import Navbar from '../../components/navbar/navbar';
import AccountNav from '../../components/accounts/accountNav/accountNav';
import { generatePremadeTutors, getTutorsByLevel } from '../../utils/premadeTutors';
import './findTutor.css';
import Footer from '../../components/footer/footer';

const FindTutor = () => {
  const { currentUser } = useCurrentUser();  
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutors = async () => {
      const premadeTutors = await generatePremadeTutors();
      setTutors(premadeTutors);
      setFilteredTutors(premadeTutors); // Initially set to all tutors
    };

    fetchTutors();
  }, []);

  useEffect(() => {
    const filterTutors = async () => {
      if (selectedLevel) {
        const filtered = await getTutorsByLevel(selectedLevel, tutors);
        setFilteredTutors(filtered);
      } else {
        setFilteredTutors(tutors);
      }
    };

    filterTutors();
  }, [selectedLevel, tutors]);

  const handleTutorClick = (tutor) => {
    navigate(`/tutor/${tutor.id}`);
  };


  return (
    <div className="tutor-listing-page-ft">
        {currentUser ? <AccountNav /> : <Navbar />}
      <div className="tutor-listing-content-ft">
        <aside className="tutor-filter-sidebar-ft">
          <h2 className="filter-title-ft">Filter by Level</h2>
          <div className="level-buttons-ft">
              {['Entry Level', 'Junior', 'Senior'].map(level => (
              <button
                key={level}
                className={`level-button-ft ${selectedLevel === level ? 'active' : ''}`}
                onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
              >
                {level}
            </button>
          ))}
          </div>
        </aside>
        <main className="tutor-list-container-ft">
          <h1 className="tutor-list-title-ft">
            {selectedLevel ? `${selectedLevel} Tutors` : 'Tutors Online Now'}
          </h1>
          <div className="tutor-grid-ft">
            {filteredTutors.map((tutor) => (
              <div key={tutor.id} className="tutor-card-ft" onClick={() => handleTutorClick(tutor)}>
                <img src={tutor.photo} alt={tutor.name} className="tutor-image-ft" />
                <h3 className="tutor-name-ft">{tutor.name}</h3>
                <div className="tutor-skills-ft">
                  {tutor.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag-ft">{skill}</span>
                  ))}
                </div>
                <p className="tutor-rating-ft">
                    Rating: {typeof tutor.rating === 'number' ? tutor.rating.toFixed(1) : 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
        <Footer />
    </div>
  );
};

export default FindTutor;