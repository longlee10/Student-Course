const mongoose = require("mongoose");
const Joi = require("joi");
const { courseSchema } = require("./courses");

const studentSchema = new mongoose.Schema({
  studentNumber: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  program: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  coursesTaken: { type: [courseSchema] },
});

const Student = mongoose.model("Student", studentSchema);

const validateStudent = (student) => {
  const schema = {
    studentNumber: Joi.string().min(9).max(9).required(),
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    program: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(50).required(),
    address: Joi.string().min(5).max(255).required(),
    city: Joi.string().min(3).max(50).required(),
    phoneNumber: Joi.string().min(10).max(15).required(),
  };

  return Joi.validate(student, schema);
};

exports.Student = Student;
exports.validate = validateStudent;
exports.studentSchema = studentSchema;
