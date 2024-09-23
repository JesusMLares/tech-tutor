// Import and initializes express
const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Imports the routes from other files uisng express router
const routeOne = require('./routes/routeOne')
const routeTwo = require('./routes/routeTwo')

// Passes the route to each specific file, therefore 
// routes do not have to be explicity defined in their file
app.use('/routeOne', routeOne)
app.use('/routeTwo', routeTwo)

app.listen(PORT, () => {
    console.log("The server is working if you can read this")
})