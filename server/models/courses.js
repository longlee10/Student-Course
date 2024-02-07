const mongoose = require("mongoose");
const Joi = require("joi");

const courseSchema = new mongoose.Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  section: { type: String, required: true },
  semester: { type: String, required: true },
});

function validateCourse(course) {
  const schema = {
    code: Joi.string().min(7).max(50).required(),
    title: Joi.string().min(5).max(50).required(),
    section: Joi.string().min(3).max(10).required(),
    semester: Joi.string().min(3).max(20).required(),
  };

  return Joi.validate(course, schema);
}

const Course = mongoose.model("Course", courseSchema);

exports.Course = Course;
exports.validate = validateCourse;
exports.courseSchema = courseSchema;
