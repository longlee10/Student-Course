const express = require("express");
const router = express.Router();
const { Course, validate } = require("../models/courses");

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.send(courses).status(200);
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("The course with the given ID was not found.");
  res.send(course);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = new Course({
    code: req.body.code,
    title: req.body.title,
    section: req.body.section,
    semester: req.body.semester,
  });

  res.send(await course.save());
});

module.exports = router;
