// Import and initializes express
const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Imports the routes from other files uisng express router
const checkOut = require('./routes/checkOut')
const products = require('./routes/products')

// Passes the route to each specific file, therefore 
// routes do not have to be explicity defined in their file
app.use('/checkOut', checkOut)
app.use('/products', products)

app.listen(PORT, () => {
    console.log("The server is working if you can read this")
})


// ****** PROXY SERVER TO LOCALHOST ADDED TO FRONTEND PACKAGE.JSON *******