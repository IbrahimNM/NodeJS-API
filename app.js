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
  res.send("This page contains all the information you need.");
});

/**
 * '/data' endpoint declearaiton.
 * It allows only POST requests.
 * */
app.post("/data", (req, res) => {
  // Displat useful msg for server admin
  console.log("/data has been called with a " + req.method + " request.");
  // Response to caller
  res.send("New data has been added.");
});

/**
 * Initialize and run the server.
 * */
app.listen(port, () => console.log(`Server is running on localhost:${port}`));
