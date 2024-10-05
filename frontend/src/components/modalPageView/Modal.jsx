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

  // Card info controls
  const [showFakeCardInfo, setShowFakeCardInfo] = useState(false);
  const handleCardOpen = () => setShowFakeCardInfo(!showFakeCardInfo);

  // Stripe setup
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const stripeUrl = process.env.REACT_APP_STRIPE_URL;
  console.log("Stripe URL: ", stripeUrl);
  

  useEffect(() => {
    // Remove env for local testing
    fetch(`${stripeUrl}/checkOut/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, [stripeUrl]);

  useEffect(() => {
    fetch(`${stripeUrl}/checkOut/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, [stripeUrl]);

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

          <Button className="booking-modal-warning-btn" onClick={handleCardOpen} >
            {showFakeCardInfo ? "Hide Card Info" : "Card info"}
          </Button>

          {showFakeCardInfo && (
            <div className="fake-card-info">
              <p>Use this card number for testing:</p>
              <p><strong>Card Number:</strong> 4242 4242 4242 4242</p>
              <p><strong>Expiration:</strong> 04/44</p>
              <p><strong>CVC:</strong> 444</p>
              <p><strong>ZIP:</strong> 44444</p>
            </div>
          )}

          <div className="modal-info-warning">
            <p>This is a test environment please do not enter real card information</p>
          </div>

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
