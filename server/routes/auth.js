const express = require("express");
const router = express.Router();
const { Student } = require("../models/students");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let student = await Student.findOne({ email: req.body.email });
  if (!student) return res.status(400).send("Invalid email or password.");

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    student.password
  );

  if (!isValidPassword)
    return res.status(400).send("Invalid email or password.");

  const token = jwt.sign({ _id: student._id }, "jwtPrivateKey");
  res.cookie("token", token, {
    httpOnly: true,
    path: "/",
  });

  res.send(token);
});

function validate(requestBody) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(requestBody, schema);
}

module.exports = router;
