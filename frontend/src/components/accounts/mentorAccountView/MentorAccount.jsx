import React from "react";
import AccountNav from "../accountNav/accountNav";
import "./Mentor.css";
import MentorAppointmentCard from "../../mentorAppointmentCards/Mentorcard";
import { Modal, Box, Button, Typography } from "@mui/material";

function MentorAccount() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDelete() {
    console.log("Account Deleted");
    handleClose();
  }

  return (
    <div className="mentor-account-container">
      <AccountNav />
      <div className="center-mentor-boxes">
        <div className="mentor-grid-layout">
          <div className="mentor-account-info-container">
            <h1 className="mentor-account-header">Account Information</h1>
            <p>
              <strong>UserName:</strong> JohnDoe
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
            <button onClick={handleOpen} className="account-delete-btn">
              Delete Account
            </button>
          </div>
          <div className="mentor-appointment-container">
            <h1 className="mentor-account-header">Your Appointments</h1>
            <MentorAppointmentCard />
          </div>
          <div className="mentor-skills-container">
            <h1 className="mentor-skills-header">Mentor Skills</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  );
}

export default MentorAccount;