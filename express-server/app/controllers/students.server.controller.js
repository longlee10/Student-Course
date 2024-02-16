const { Student, validate } = require("../models/students.server.model");
const { Course } = require("../models/courses.server.model");
const bcrypt = require("bcrypt");

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.send(students).status(200);
};

exports.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student)
    return res.status(404).send("The student with the given ID was not found.");

  const coursesTaken = await Promise.all(
    student.coursesTaken.map(async (courseId) => {
      return await Course.findById(courseId);
    })
  );

  res.send({ student, coursesTaken });
};

exports.createStudent = async (req, res) => {
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
};

exports.dropCourse = async (req, res) => {
  let student = await Student.findOne({ email: req.body.email });

  if (!student)
    return res.status(404).send("The student with the given ID was not found.");

  Student.updateOne(
    { email: req.body.email },
    { $pull: { coursesTaken: req.body.courseId } },
    function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
};

exports.addCourse = async (req, res) => {
  let student = await Student.findOne({ email: req.body.email });
  if (!student)
    return res.status(404).send("The student with the given ID was not found.");

  console.log(student);

  console.log(req.body.course);

  const course = await Course.findOne({ _id: req.body.course });
  console.log("id: ", req.params.id);

  // add student to course
  course.students.push(req.params.id);
  await course.save();

  await student.coursesTaken.push(req.body.course);
  res.send(await student.save());
};
