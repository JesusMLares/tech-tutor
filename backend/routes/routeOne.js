// Import express and express router
const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Get Route for Route 1")
});

router.post("/", (req,res) => {
    res.send("Post Route for Route 1")
});

router.put("/", (req,res) => {
    res.send("Put Route for Route 1")
});

router.delete("/", (req, res) => {
    res.send("Delete Route for Route 1")
});

// Exports these routes to index.js
module.exports = router;