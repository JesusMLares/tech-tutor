import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { getTutorById } from '../../utils/premadeTutors';
import { generateTutorDescription } from '../../utils/descriptionGenerator';
import './tutorpage.css';
import Footer from '../../components/footer/footer';

const TutorPage = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const fetchedTutor = await getTutorById(id);
        setTutor(fetchedTutor);
      } catch (error) {
        console.error('Error fetching tutor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutor();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tutor) {
    return <div>Tutor not found</div>;
  }

  const tutorDescription = generateTutorDescription(tutor.name, tutor.skills);

  return (
    <div className="tutor-page-container-tp">
      <Navbar />
      <div className="tutor-page-content-tp">
    <div className="tutor-page-tp">
     <button className="back-button-tp" onClick={() => navigate(-1)}>Back</button>
    <div className="tutor-header-tp">
      <img src={tutor.photo} alt={tutor.name} className="tutor-image-tp" />
      <div className="tutor-info-tp">
        <h1>{tutor.name}</h1>
        <p className="tutor-level-tp">Level: {tutor.level}</p>
        <p className="tutor-rating-tp">
          Rating: {typeof tutor.rating === 'number' ? tutor.rating.toFixed(1) : 'N/A'}
        </p>
        <button className="book-button-tp">Book Me Now</button>
      </div>
    </div>
    <div className="tutor-description-tp">
      <p>{tutorDescription}</p>
    </div>
    <div className="tutor-skills-tp">
      <h2>Skills:</h2>
      <ul>
        {tutor.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TutorPage;