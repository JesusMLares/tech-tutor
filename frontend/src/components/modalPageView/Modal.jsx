import React, { useState, useEffect } from "react";
import { Modal, Box, Button } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../checkOutPageView/CheckOut";
import './modal.css';

function ModalPage({ tutor }) {
  // Modal controls
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Stripe setup
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/checkOut/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/checkOut/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div>
      <button onClick={handleOpen} className="booking-modal-open-btn">
        Book Appointment
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="booking-modal-box">
          {/* Back Button positioned at top-left */}
          <Button className="booking-modal-back-btn" onClick={handleClose}>
            Back
          </Button>
          {/* Render the Stripe checkout form within the modal */}
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckOut tutor={tutor}/>
            </Elements>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default ModalPage;