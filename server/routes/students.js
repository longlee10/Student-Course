const express = require("express");
const router = express.Router();
const { Student, validate } = require("../models/students");

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students).status(200);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const student = new Student({
    studentNumber: req.body.studentNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    program: req.body.program,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
  });

  res.send(await student.save());
});

module.exports = router;
