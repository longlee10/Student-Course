const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/centennial")
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
