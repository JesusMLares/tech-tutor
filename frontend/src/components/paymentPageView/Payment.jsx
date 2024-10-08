import React from "react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./payment.css";
import CheckOut from "../checkOutPageView/CheckOut";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  
  const stripeUrl = process.env.REACT_APP_STRIPE_URL;

  useEffect(() => {
    //Remove or add env HERE!
    fetch(`${stripeUrl}/checkOut/config`).then(async (r) => {
      const { publishableKey } = await r.json();

      //console.log("Publishable key:",publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    //Remove or add env HERE!
    fetch(`${stripeUrl}/checkOut/create-payment-intent`, {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();

      //console.log("Client Secret:",clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckOut />
        </Elements>
      )}
    </>
  );
}

export default Payment;
