const express = require("express");
const app = express();
const port = 3000;

/**
 * '/' endpoint declearaiton.
 * It is the home page for the API
 * */
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

/**
 * '/info' endpoint declearaiton.
 * It allows only GET requests.
 * */
app.get("/info", (req, res) => {
  res.send("This page contains all the information you need.");
});

/**
 * '/data' endpoint declearaiton.
 * It allows only POST requests.
 * */
app.post("/data", (req, res) => {
  res.send("New data has been added.");
});

/**
 * Initialize and run the server.
 * */
app.listen(port, () => console.log(`Server is running on localhost:${port}`));
