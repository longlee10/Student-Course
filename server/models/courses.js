const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  section: { type: String, required: true },
  semester: { type: String, required: true },
});

const Course = mongoose.model("Course", courseSchema);

exports.Course = Course;
