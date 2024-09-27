import React from "react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js"
import "./payment.css";
import CheckOut from "../checkOutPageView/CheckOut"; 
import { Elements } from "@stripe/stripe-js";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/checkOut/config").then(async (r) => {
      const {publishableKey} = await r.json();

      //console.log("Publishable key:",publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/checkOut/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const {clientSecret} = await r.json();

      //console.log("Client Secret:",clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      <h1>Payment Page</h1>
      <Elments>
        <CheckOut />
      </Elments>
    </>
  );
}

export default Payment;