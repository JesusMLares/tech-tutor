import React, { useState, useContext, useEffect } from "react";
import { AppointmentContext } from "../../context/AppointmentContext";
import { useNavigate } from "react-router-dom";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import "./checkOut.css";
import AccountNav from "../accounts/accountNav/accountNav";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { GraphQLClient, gql } from "graphql-request"
import { useCurrentUser } from "../../context/CurrentUser";

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


function CheckOut({ tutor }) {
  const stripe = useStripe();
  const elements = useElements();
  const { currentUser } = useCurrentUser()
  const navigate = useNavigate();

  const { setAppointmentDetails } = useContext(AppointmentContext);

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleCreateAppointment = async (dateFormatted) => {
    try {
      const data = await client.request(CREATE_APPOINTMENT_MUTATION, {
        input: {
          date: dateFormatted,
          userId: currentUser.id,
          tutorId: tutor.id,
        },
      })
    } catch (error) {
      console.error("Failed to create appointment: ", error)
      alert("Failed to create appointment")
    }
  }

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log("User selected: ", newDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !selectedDate) {
      setMessage("Please fill in all fields before submitting.");
      return;
    }

    setIsProcessing(true);

    const appointmentDate = dayjs(selectedDate).format("MM-DD-YYYY");

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation`,
        payment_method_data: {
          metadata: {
            appointmentDate: appointmentDate,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
          },
        },
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage(
        `Payment successful! Appointment Date: ${appointmentDate}, Name: ${firstName} ${lastName}`
      );
      setAppointmentDetails({
        appointmentDate,
        mentor: tutor.firstName + " " + tutor.lastName,
      });
      handleCreateAppointment(appointmentDate);
      navigate("/confirmation");
    } else if (paymentIntent && paymentIntent.status === "processing") {
      setMessage("Payment is still processing.");
    } else if (paymentIntent && paymentIntent.status === "requires_action") {
      setMessage("Payment requires additional authentication.");
    } else {
      setMessage("Unexpected state");
    }

    setIsProcessing(false);
  };

  return (
    <div className="payment-container">
      {/* <AccountNav /> */}
      <div className="payment-grid-cotainer">
        <div className="payment-header">
          <h1>Book an appointment</h1>
          <form className="date-name-container">
            <div className="name-container">
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                label="Select appointment date"
                value={selectedDate}
                onChange={handleDateChange}
                minDate={dayjs().subtract(1, "month")} // Set the minimum date
                maxDate={dayjs().add(1, "year")} // Set the maximum date
              />
            </LocalizationProvider>
          </form>
        </div>
        <div className="payment-form-container">
          <form className="payment-form-sizing" onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={isProcessing} className="payment-button">
              <span>{isProcessing ? "Processing ..." : "Pay now"}</span>
            </button>
            {message && <div>{message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
