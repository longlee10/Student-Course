const express = require("express");
const router = express.Router();
const { Course } = require("../models/courses");

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.send(courses).status(200);
});

router.post("/", async (req, res) => {
  const course = new Course({
    code: req.body.code,
    title: req.body.title,
    section: req.body.section,
    semester: req.body.semester,
  });

  res.send(await course.save());
});

module.exports = router;
