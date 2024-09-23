// Import express and express router
const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Get Route for Route 2")
});

router.post("/", (req,res) => {
    res.send("Post Route for Route 2")
});

router.put("/", (req,res) => {
    res.send("Put Route for Route 2")
});

router.delete("/", (req, res) => {
    res.send("Delete Route for Route 2")
});

// Exports these routes to index.js
module.exports = router;