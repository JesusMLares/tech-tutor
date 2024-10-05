import React, { useState, useEffect } from "react"
import AccountNav from "../accountNav/accountNav"
import "./Mentor.css"
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "../../../context/CurrentUser"
import MentorAppointmentCard from "../../mentorAppointmentCards/Mentorcard"
import { Modal, Box, Button, Typography } from "@mui/material"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const GET_USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
      imageUrl
      skills
      isAvailable
      userAppointments {
        id
        date
        tutorId
        postId
      }
      tutorAppointments {
        id
        date
        userId
        postId
      }
    }
  }
`

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

function MentorAccount() {
  const { currentUser, updateToken } = useCurrentUser()
  const [userData, setUserData] = useState([])
  const [userAppointments, setUserAppointments] = useState([])
  const [tutorAppointments, setTutorAppointments] = useState([])
  const [open, setOpen] = React.useState(false)

  const navigate = useNavigate()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleFetchUser = async () => {
    if (!currentUser) {
      return
    }
    try {
      const data = await client.request(GET_USER_QUERY, { id: currentUser.id })

      if (data && data.user) {
        setUserData({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          role: data.user.role,
          imageUrl: data.user.imageUrl,
          skills: data.user.skills,
          isAvailable: data.user.isAvailable,
        })
        console.log("User Data: ", data.user)
        setUserAppointments(data.user.userAppointments)
        setTutorAppointments(data.user.tutorAppointments)
      }
    } catch (error) {
      console.error("Error fetching user:", error)
      alert("Failed to fetch user")
    }
  }

  useEffect(() => {
    if (currentUser?.role !== "TUTOR") {
      navigate("/user/account")
    }
    handleFetchUser()
  }, [currentUser])

  const handleDelete = async () => {
    try {
      await client.request(DELETE_USER_MUTATION, { id: currentUser.id })
      alert("User deleted successfully")
      updateToken(null)
      navigate("/")
    } catch (error) {
      console.error(error)
      alert("Failed to delete user")
    }
  }

  return (
    <div className="mentor-account-container">
      <AccountNav />
      <div className="center-mentor-boxes">
        <div className="mentor-grid-layout">
          <div className="mentor-account-info-container">
            <h1 className="mentor-account-header">Account Information</h1>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>First Name:</strong> {userData.firstName}
              <strong>Last Name:</strong> {userData.lastName}
            </p>
            <p>
              <strong>Role:</strong> {userData.role}
            </p>
            <img src={userData.imageUrl} alt="profile" className="mentor-profile-img" />
            <button onClick={handleOpen} className="account-delete-btn">
              Delete Account
            </button>
          </div>
          <div className="mentor-appointment-container">
            <h1 className="mentor-account-header">Your Student Appointments</h1>
            {tutorAppointments.map((appointment) => (
              <MentorAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
            <h1 className="mentor-account-header">Your Booked Appointment</h1>
            {userAppointments.map((appointment) => (
              <MentorAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
          <div className="mentor-skills-container">
            <h1 className="mentor-skills-header">Mentor Skills</h1>
            <p>
              <strong>{userData.skills}</strong>
            </p>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box">
          <Typography id="modal-title" variant="h6" component="h2">
            Are you sure you would like to delete your account?
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This action cannot be undone.
          </Typography>
          <div className="modal-buttons">
            <Button variant="contained" color="error" onClick={handleDelete}>
              Yes, delete my account
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              No, go back
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default MentorAccount
