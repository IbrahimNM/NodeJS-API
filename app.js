const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/info", (req, res) => {
  res.send("This page contains all the information you need.");
});

app.listen(port, () => console.log(`Server is running on localhost:${port}`));
