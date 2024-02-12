const express = require("express");
const router = express.Router();
const { Student, validate } = require("../models/students");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students).status(200);
});

router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student)
    return res.status(404).send("The student with the given ID was not found.");
  res.send(student);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if student email already exists
  let student = await Student.findOne({ email: req.body.email });
  if (student)
    return res.status(400).send("Student with this email already exists");

  student = new Student({
    studentNumber: req.body.studentNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    program: req.body.program,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
    coursesTaken: req.body.coursesTaken,
  });

  const salt = await bcrypt.genSalt(10);
  student.password = await bcrypt.hash(student.password, salt);

  res.send(await student.save());
});

module.exports = router;
