import React, { useState, useEffect } from "react"
import "./MentorCard.css";
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const GET_USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      skills
    }
  }
`

function MentorAppointmentCard( { appointment } ) {
  const userId = appointment.userId;
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const data = await client.request(GET_USER_QUERY, { id: userId });
      if (data && data.user) {
        setUser({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          skills: data.user.skills,
        });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch user");
    }
  }

  useEffect(() => {
    fetchUser();
  }
  , [userId]);

  return (
    <div className="custom-mentor-card">
      <div className="custom-mentor-card-info">
        <img src="/img/pc-tech.tutor-bg.png" className="custom-mentor-card-image" alt="Mentor" />
        <div className="custom-mentor-card-details">
          <h1 className="custom-mentor-card-name">
            {user.firstName} {user.lastName}
          </h1>
          <p className="custom-mentor-card-skills">JavaScript, Python</p>
        </div>
        <p className="custom-mentor-card-date">{appointment.date}</p>
      </div>
    </div>
  );
}

export default MentorAppointmentCard;