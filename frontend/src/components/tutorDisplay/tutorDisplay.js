import React, { useState, useEffect } from 'react';
import { getMultipleRandomTutors } from '../../utils/tutorGenerator';
import './tutorDisplay.css';
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

const TutorCard = ({ firstName, lastName, imageUrl, skills, rating }) => (
    <div className="tutor-card-td">
      <img src={imageUrl} alt={firstName} className="tutor-image-td" />
      <h3>{firstName} {lastName}</h3>
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
  
  const fetchTutors = async () => {
    try {
      const data = await client.request(GET_TUTORS_QUERY)
      if (data && data.tutorUsers) {
        setTutors(data.tutorUsers)
      }
    } catch (error) {
      console.error(error)
      alert("Failed to fetch tutors")
    }
  }
  
      

  useEffect(() => {
    fetchTutors()
  }, [])

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