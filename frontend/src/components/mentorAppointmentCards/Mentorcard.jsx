import React, { useState, useEffect } from "react"
import "./MentorCard.css"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl)

const GET_USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      imageUrl
      skills
    }
  }
`
const DELETE_APPOINTMENT_MUTATION = gql`
  mutation DeleteAppointment($id: String!) {
    deleteAppointment(id: $id) {
      id
    }
  }
`

function MentorAppointmentCard({ appointment }) {
  const userId = appointment.userId || appointment.tutorId;
  const [user, setUser] = useState({});
  const [isDeleted, setIsDeleted] = useState(false); // State variable to track deletion

  const fetchUser = async () => {
    try {
      const data = await client.request(GET_USER_QUERY, { id: userId });
      if (data && data.user) {
        setUser({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          skills: data.user.skills,
          imageUrl: data.user.imageUrl,
        });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch user");
    }
  };

  const handleDeleteAppointment = async () => {
    try {
      const data = await client.request(DELETE_APPOINTMENT_MUTATION, {
        id: appointment.id,
      });
      if (data && data.deleteAppointment) {
        alert("Appointment deleted");
        setIsDeleted(true); // Update state to remove the component
      }
    } catch (error) {
      alert("Failed to delete appointment");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  if (isDeleted) {
    return null; // Do not render the component if it is deleted
  }

  return (
    <div className="custom-mentor-card">
      <div className="custom-mentor-card-info">
        <img
          src={user.imageUrl}
          className="custom-mentor-card-image"
          alt="Mentor"
        />
        <div className="custom-mentor-card-details">
          <h1 className="custom-mentor-card-name">
            {user.firstName} {user.lastName}
          </h1>
          <p className="custom-mentor-card-skills">
            {appointment.userId ? "Student" : `${user.skills}`}
          </p>
        </div>
        <p className="custom-mentor-card-date">{appointment.date}</p>
        <button className="mentor-finished-btn" onClick={handleDeleteAppointment}>
          Finished
        </button>
      </div>
    </div>
  );
}

export default MentorAppointmentCard
