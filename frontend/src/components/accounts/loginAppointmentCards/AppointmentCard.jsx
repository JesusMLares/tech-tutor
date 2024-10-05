import React, { useState, useEffect } from "react"
import "./AppointmentCard.css"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const GET_TUTOR_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      skills
      imageUrl
    }
  }
`

function AppointmentCard({ appointment }) {
  const tutorId = appointment.tutorId
  const [tutor, setTutor] = useState({})

  const fetchTutor = async () => {
    try {
      const data = await client.request(GET_TUTOR_QUERY, { id: tutorId })
      if (data && data.user) {
        setTutor({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          skills: data.user.skills,
          imageUrl: data.user.imageUrl
        })
      }
    } catch (error) {
      console.error(error)
      alert("Failed to fetch tutor")
    }
  }

  useEffect(() => {
    fetchTutor()
  }, [tutorId])

  return (
    <div className="custom-card">
      <div className="custom-card-info">
        <img
          src={tutor.imageUrl}
          className="custom-card-image"
          alt="Mentor"
        />
        <div className="custom-card-details">
          <h1 className="custom-card-name">
            {tutor.firstName} {tutor.lastName}
          </h1>
          <p className="custom-card-skills">{tutor.skills}</p>
        </div>
        <p className="custom-card-date">{appointment.date}</p>
        <button className="login-finished-btn">Finished</button>
      </div>
    </div>
  )
}

export default AppointmentCard
