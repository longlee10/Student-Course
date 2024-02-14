const students = require("../controllers/students.server.controller");
const users = require("../controllers/users.server.controller");

module.exports = function (app) {
  app.route("/students").get(students.getStudents).post(students.createStudent);
  app
    .route("/students/:id")
    .get(students.getStudent)
    .post(students.dropCourse)
    .put(students.addCourse);
};
