const courses = require("../controllers/courses.server.controller");

module.exports = function (app) {
  app.route("/courses").get(courses.getCourses).post(courses.createCourse);
  app.route("/courses/:id").get(courses.getCourse).put(courses.updateCourse);
};
