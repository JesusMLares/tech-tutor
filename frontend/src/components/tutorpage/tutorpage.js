import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { getTutorById } from '../../utils/premadeTutors';
import { generateTutorDescription } from '../../utils/descriptionGenerator';
import { generateTutorProfile } from '../../utils/tutorProfileGenerator';
import './tutorpage.css';
import Footer from '../../components/footer/footer';

const TutorPage = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [tutorProfile, setTutorProfile] = useState(null);

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const fetchedTutor = await getTutorById(id);
        setTutor(fetchedTutor);
        setTutorProfile(generateTutorProfile());
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
      <div className="tutor-left-column-tp">
        <button className="back-button-tp" onClick={() => navigate(-1)}>Back</button>
        <div className="tutor-header-tp">
          <img src={tutor.photo} alt={tutor.name} className="tutor-image-tp" />
          <div className="tutor-info-tp">
            <h1>{tutor.name}</h1>
            <p className="tutor-level-tp">Level: {tutor.level}</p>
            <p className="tutor-rating-tp">
              Rating: {typeof tutor.rating === 'number' ? tutor.rating.toFixed(1) : 'N/A'}
            </p>
            <div className="tutor-booking-info-tp">
              <button className="book-button-tp">Book Me Now</button>
              <div className="tutor-rates-availability-tp">
                <p className="tutor-rates-tp">{tutorProfile.rate}</p>
                <p className="tutor-availability-tp">{tutorProfile.availability}</p>
              </div>
            </div>
          </div>
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
      <div className="tutor-right-column-tp">
        <div className="tutor-description-tp">
          <p>{tutorDescription}</p>
        </div>
        <div className="tutor-experience-tp">
          <h2>Experience</h2>
          <p>{tutorProfile.experience}</p>
        </div>
        <div className="tutor-testimonials-tp">
          <h2>What My Students Say</h2>
          {tutorProfile.testimonials.map((testimonial, index) => (
            <blockquote key={index}>
              "{testimonial}"
              <footer>- Student {index + 1}</footer>
            </blockquote>
          ))}
        </div>
        <div className="tutor-comments-tp">
          <h2>Recent Comments</h2>
          <ul>
            {tutorProfile.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
  );
};

export default TutorPage;