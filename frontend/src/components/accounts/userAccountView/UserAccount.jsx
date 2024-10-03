import React from "react";
import AccountNav from "../accountNav/accountNav";
import "./Account.css";
import AppointmentCard from "../loginAppointmentCards/AppointmentCard";
import { Modal, Box, Button, Typography } from '@mui/material';

function UserAccount() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDelete() {
    console.log("Account Deleted");
    handleClose();
  }
  return (
    <div className="user-account-container">
      <AccountNav />
      <div className="center-account-boxes">
        <div className="user-grid-layout">
          <div className="user-account-info-container">
            <h1 className="user-account-header">Account Information</h1>
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
          <div className="user-appointment-container">
            <h1 className="user-account-header">Your Appointments</h1>
            <AppointmentCard />
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

export default UserAccount;
