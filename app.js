const express = require("express");
const app = express();
const port = 3000;

/**
 * '/' endpoint declearaiton.
 * It is the home page for the API
 * */
app.get("/", (req, res) => {
  // Print useful info. in server terminal
  console.log(getDateTime() + " " + req.method + " " + res.statusCode);
  res.send("Welcome to the Home Page!");
});

/**
 * '/info' endpoint declearaiton.
 * It allows only GET requests.
 * */
app.get("/info", (req, res) => {
  // Print useful info. in server terminal
  console.log(getDateTime() + " " + req.method + " " + res.statusCode);
  // Response to caller
  res.send("This page contains all the information you need.");
});

/**
 * '/data' endpoint declearaiton.
 * It allows only POST requests.
 * */
app.post("/data", (req, res) => {
  // Print useful info. in server terminal
  console.log(getDateTime() + " " + req.method + " " + res.statusCode);
  // Response to caller
  res.send("New data has been added.");
});

/**
 * Initialize and run the server.
 * */
app.listen(port, () => console.log(`Server is running on localhost:${port}`));

/**
 * Function written by: https://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js/16426519
 */
function getDateTime() {
  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
}
