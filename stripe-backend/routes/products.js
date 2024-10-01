// Import express and express router
const express = require("express");
const router = express.Router();
// const { resolve } = require("path"); May be needed later for deployment build
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

router.post("/create-product", async (req, res) => {
  try {
    const product = await stripe.products.create({
      name: "Test Mentor", // Replace to make dynamic?
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/get-prodcut/:id", async (req, res) => {
    try {
        const product = await stripe.products.retrieve(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
