// express-server/app.js
const express = require("express");
const app = express();
const port = 4000; // Choose any port you prefer
const cors = require("cors");

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
app.use(cors()); // Enable CORS for all routes