import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const QUERY_APPOINTMENTS = gql`
  query {
    appointments {
      id
      date
      userId
      tutorId
      postId
    }
  }
`

const QUERY_APPOINTMENT = gql`
  query Appointment($id: String!) {
    appointment(id: $id) {
      id
      date
      userId
      tutorId
      postId
    }
  }
`

const TestQueryAppointment = () => {
  const [appointmentId, setAppointmentId] = useState("")
  const [appointment, setAppointment] = useState(null)
  const [appointments, setAppointments] = useState([])

  const [userId, setUserId] = useState("")
  const [userAppointments, setUserAppointments] = useState([])

  //Fetch specific appointment
  const handleFetchAppointment = async () => {
    try {
      const data = await client.request(QUERY_APPOINTMENT, {
        id: appointmentId,
      })
      setAppointment(data.appointment)
    } catch (error) {
        console.error(error)
        alert("Failed to fetch appointment")
    }
  }

  //Fetch all appointments
  const handleFetchAppointments = async () => {
    try {
      const data = await client.request(QUERY_APPOINTMENTS)
      setAppointments(data.appointments)
    } catch (error) {
      console.error(error)
      alert("Failed to fetch appointments")
    }
  }

  //Fetch all appointments by user

  return (
    <>
      <h1>TestQueryAppointment</h1>
      <div>
        <h3>Fetch specific appointment</h3>
        <input
          type="text"
          placeholder="Appointment ID"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
        />
        <button onClick={handleFetchAppointment}>Fetch Appointment</button>
        <div>
          {appointment && (
            <div>
              <p>ID: {appointment.id}</p>
              <p>Date: {appointment.date}</p>
              <p>User ID: {appointment.userId}</p>
              <p>Tutor ID: {appointment.tutorId}</p>
              <p>Post ID: {appointment.postId}</p>
              <p>--------------</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <h1>Fetch all appointments</h1>
        <button onClick={handleFetchAppointments}>Fetch Appointments</button>
        <div>
          {appointments &&
            appointments.map((appointment, index) => (
              <div key={index}>
                <p>ID: {appointment.id}</p>
                <p>Date: {appointment.date}</p>
                <p>User ID: {appointment.userId}</p>
                <p>Tutor ID: {appointment.tutorId}</p>
                <p>Post ID: {appointment.postId}</p>
                <p>--------------</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default TestQueryAppointment
