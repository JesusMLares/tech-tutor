import React, { useState, useEffect } from "react"
import "./AppointmentCard.css"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")
//import { AppointmentContext } from '../../../context/AppointmentContext

const GET_TUTOR_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      skills
    }
  }
`

function AppointmentCard({ appointment }) {
  //const { appointment } = useContext(AppointmentContext)
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
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTutor()
  }, [tutorId])

  return (
    <div className="custom-card">
      <div className="custom-card-info">
        <img
          src="/img/pc-tech.tutor-bg.png"
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
      </div>
    </div>
  )
}

export default AppointmentCard
