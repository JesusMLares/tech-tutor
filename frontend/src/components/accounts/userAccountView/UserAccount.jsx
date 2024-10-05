import React, { useState, useEffect } from "react"
import AccountNav from "../accountNav/accountNav";
import "./Account.css";
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "../../../context/CurrentUser";
import AppointmentCard from "../loginAppointmentCards/AppointmentCard";
import { Modal, Box, Button, Typography } from '@mui/material';
import { GraphQLClient, gql } from "graphql-request"

import TestCreateAppointment from "../../Test/TestAppointment/TestCreateAppointment";

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
      userAppointments {
        id
        date
        tutorId
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

function UserAccount() {
  const { currentUser, updateToken } = useCurrentUser();
  const [userData, setUserData] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFetchUser = async () => {
    if (!currentUser) {
      return;
    }
    try {
      const data = await client.request(GET_USER_QUERY, { id: currentUser.id });
  
      if (data && data.user) {
        setUserData({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          role: data.user.role,
          imageUrl: data.user.imageUrl,
        });
        setAppointments(data.user.userAppointments);
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('Failed to fetch user');
    }
  };


  //currentUser takes time to load
  useEffect(() => {
    if(currentUser.role !== "USER") {
      navigate("/mentor/account");
    }

    handleFetchUser();
  }, [currentUser]);


  const handleDelete = async () => {
    try {
      await client.request(DELETE_USER_MUTATION, { id: currentUser.id });
      alert("User deleted successfully");
      updateToken(null);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  }

  return (
    <div className="user-account-container">
      <AccountNav />
      <div className="center-account-boxes">
        <div className="user-grid-layout">
          <div className="user-account-info-container">
            <h1 className="user-account-header">Account Information</h1>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>First Name:</strong> {userData.firstName}
            </p>
            <p>
            <strong>Last Name:</strong> {userData.lastName}
            </p>
            <p>
              <strong>Role:</strong> {userData.role}
            </p>
            <img src={userData.imageUrl} alt="user" className="user-image" />
            <button onClick={handleOpen} className="account-delete-btn">
              Delete Account
            </button>
          </div>
          <div className="user-appointment-container">
            <h1 className="user-account-header">Your Appointments</h1>
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
        {/* <TestCreateAppointment /> */}
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
  );
}

export default UserAccount;
