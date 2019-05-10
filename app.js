const express = require("express");
const app = express();
const port = 3000;

/**
 * '/' endpoint declearaiton.
 * It is the home page for the API
 * */
app.get("/", (req, res) => {
  // Displat useful msg for server admin
  console.log("/ has been called with a " + req.method + " request.");
  res.send("Welcome to the Home Page!");
});

/**
 * '/info' endpoint declearaiton.
 * It allows only GET requests.
 * */
app.get("/info", (req, res) => {
  // Displat useful msg for server admin
  console.log("/info has been called with a " + req.method + " request.");
  // Response to caller
  res.send("Information about this API has been returned.");
});

/**
 * '/data' endpoint declearaiton.
 * It allows only POST requests.
 * */
app.post("/student", (req, res) => {
  // Displat useful msg for server admin
  console.log("/student has been called with a " + req.method + " request.");
  // Response to caller
  res.send("New student was created");
});

/**
 * Initialize and run the server.
 * */
app.listen(port, () => console.log(`Server is running on localhost:${port}`));
