const { Course, validate } = require("../models/courses.server.model");
const { Student } = require("../models/students.server.model");

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.send(courses).status(200);
};

exports.getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("The course with the given ID was not found.");

  const students = await Promise.all(
    course.students.map(async (studentId) => {
      return await Student.findById(studentId);
    })
  );

  res.send({ course, students });
};

exports.createCourse = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = new Course({
    code: req.body.code,
    title: req.body.title,
    section: req.body.section,
    semester: req.body.semester,
    students: req.body.students,
  });

  res.send(await course.save());
};

exports.updateCourse = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findByIdAndUpdate(req.params.id, {
    code: req.body.code,
    title: req.body.title,
    section: req.body.section,
    semester: req.body.semester,
  });

  if (!course)
    return res.status(404).send("The course with the given ID was not found.");

  res.send(course);
};
