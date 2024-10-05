import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "../../context/CurrentUser"
import Navbar from "../../components/navbar/navbar"
import AccountNav from "../../components/accounts/accountNav/accountNav"
import {
  generatePremadeTutors,
  getTutorsByLevel,
} from "../../utils/premadeTutors"
import "./findTutor.css"
import Footer from "../../components/footer/footer"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const GET_TUTORS_QUERY = gql`
  query {
    tutorUsers {
      id
      firstName
      lastName
      imageUrl
      skills
      rating
    }
  }
`

const FindTutor = () => {
  const { currentUser } = useCurrentUser()
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [tutors, setTutors] = useState([])
  const [filteredTutors, setFilteredTutors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const data = await client.request(GET_TUTORS_QUERY)
        if (data && data.tutorUsers) {
          setTutors(data.tutorUsers)
          setFilteredTutors(data.tutorUsers)
          console.log(data.tutorUsers)
        }
      } catch (error) {
        console.error(error)
        alert("Failed to fetch tutors")
      }
    }
    fetchTutors()
  }, [])

  const filterTutorsByLevel = (level) => {
    setSelectedLevel(level);
    let filtered = [];
    switch (level) {
      case 'Entry Level':
        filtered = tutors.filter(tutor => tutor.rating >= 0 && tutor.rating.toFixed(1) < 2);
        break;
      case 'Junior':
        filtered = tutors.filter(tutor => tutor.rating >= 2 && tutor.rating.toFixed(1) < 4);
        break;
      case 'Senior':
        filtered = tutors.filter(tutor => tutor.rating >= 4 && tutor.rating.toFixed(1) < 5);
        break;
      case 'Expert':
        filtered = tutors.filter(tutor => tutor.rating >= 5);
        break;
      default:
        filtered = tutors;
    }
    setFilteredTutors(filtered);
  };

  // useEffect(() => {
  //   const fetchTutors = async () => {
  //     const premadeTutors = await generatePremadeTutors();
  //     setTutors(premadeTutors);
  //     setFilteredTutors(premadeTutors); // Initially set to all tutors
  //   };

  //   fetchTutors();
  // }, []);

  // useEffect(() => {
  //   const filterTutors = async () => {
  //     if (selectedLevel) {
  //       const filtered = await getTutorsByLevel(selectedLevel, tutors);
  //       setFilteredTutors(filtered);
  //     } else {
  //       setFilteredTutors(tutors);
  //     }
  //   };

  //   filterTutors();
  // }, [selectedLevel, tutors]);

  const handleTutorClick = (tutor) => {
    navigate(`/tutor/${tutor.id}`)
  }

  return (
    <div className="tutor-listing-page-ft">
      {currentUser ? <AccountNav /> : <Navbar />}
      <div className="tutor-listing-content-ft">
      <aside className="tutor-filter-sidebar-ft">
        <h2 className="filter-title-ft">Filter by Level</h2>
        <div className="level-buttons-ft">
          {["Entry Level", "Junior", "Senior", "Expert"].map((level) => (
            <button
              key={level}
              className={`level-button-ft ${selectedLevel === level ? "active" : ""}`}
              onClick={() => filterTutorsByLevel(selectedLevel === level ? null : level)}
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
              <div
                key={tutor.id}
                className="tutor-card-ft"
                onClick={() => handleTutorClick(tutor)}
              >
                <img
                  src={tutor.imageUrl}
                  alt={tutor.firstName}
                  className="tutor-image-ft"
                />
                <h3 className="tutor-name-ft">
                  {tutor.firstName} {tutor.lastName}
                </h3>
                <div className="tutor-skills-ft">
                  {tutor.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag-ft">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="tutor-rating-ft">
                  Rating: {tutor.rating.toFixed(1)}
                </p>
              </div>
            ))}
          </div>
        </main>
        {/* <main className="tutor-list-container-ft">
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
        </main> */}
      </div>
      <Footer />
    </div>
  )
}

export default FindTutor
