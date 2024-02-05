import React from "react";
import { useState } from "react";

const Courses = () => {
  const coursesfromDB = [
    { id: 1, title: "Course 1" },
    { id: 2, title: "Course 2" },
    { id: 3, title: "Course 3" },
  ];

  const [courses, setCourses] = useState(coursesfromDB);

  const addCourse = () => {
    setCourses([...courses, { id: 4, title: "Course 4" }]);
  };

  const deleteCourse = (id) => {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  };

  const updateCourse = (id) => {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          {course.title}
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
          <button onClick={() => updateCourse(course.id)}>Update</button>
        </div>
      ))}
      <button>
        <a href="/new-course">Add Course</a>
      </button>
    </div>
  );
};

export default Courses;
