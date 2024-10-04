import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "../../../context/CurrentUser"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const CREATE_APPOINTMENT_MUTATION = gql`
  mutation CreateAppointment($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      id
      date
      userId
      tutorId
      postId
    }
  }
`

const TestCreateAppointment = () => {
  const [appointment, setAppointment] = useState({
    date: "",
    userId: "",
    tutorId: "",
    // postId: ""
  })
  const { currentUser, updateToken } = useCurrentUser()
  const navigate = useNavigate()

  const handleCreateAppointment = async () => {
    try {
      const data = await client.request(CREATE_APPOINTMENT_MUTATION, {
        input: appointment,
      })
      console.log(data)
      alert("Appointment created successfully")
      setAppointment({
        date: "",
        userId: "",
        tutorId: "",
        // postId: ""
      })
      navigate("/")
    } catch (error) {
      console.log(error)
      alert("Failed to create appointment")
    }
  }

  return (
    <div>
      <h2>Create Appointment</h2>
      <input
        type="text"
        placeholder="Date"
        value={appointment.date}
        onChange={(e) =>
          setAppointment({ ...appointment, date: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="User ID"
        value={appointment.userId}
        onChange={(e) =>
          setAppointment({ ...appointment, userId: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Tutor ID"
        value={appointment.tutorId}
        onChange={(e) =>
          setAppointment({ ...appointment, tutorId: e.target.value })
        }
      />
      {/* <input
            type="text"
            placeholder="Post ID"
            value={appointment.postId}
            onChange={(e) => setAppointment({ ...appointment, postId: e.target.value })}
        /> */}
      <button onClick={handleCreateAppointment}>Create Appointment</button>

      {currentUser && (
        <div>
          <h2>Current User</h2>
          <p>ID: {currentUser.id}</p>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default TestCreateAppointment
