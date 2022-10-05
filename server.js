// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

//HTTP handlers

//sending all the data
app.get("/all", (req, res) => {
  res.send(projectData);
});

//Getting data
app.post("/newData", (req, res) => {
  const newEntrey = req.body;
  projectData.temperature = newEntrey.temperature;
  projectData.date = newEntrey.date;
  projectData.userResponse = newEntrey.userResponse;

  res.send(projectData);
});

// Setup Server
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
