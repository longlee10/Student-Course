const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const courses = require("./routes/courses");
const students = require("./routes/students");
const auth = require("./routes/auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/centennial")
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  session({ secret: "sessionSecret", resave: true, saveUninitialized: true })
);
app.use(cors());

// routes
app.use("/courses", courses);
app.use("/students", students);
app.use("/auth", auth);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
