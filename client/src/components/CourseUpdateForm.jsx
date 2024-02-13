import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const CourseUpdateForm = () => {
  const courseCode = useRef(null);
  const courseName = useRef(null);
  const section = useRef(null);
  const semester = useRef(null);

  let { id } = useParams();
  const [course, setCourse] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/courses/${id}`);
        setCourse(response.data.course); // Set the course data to the state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse(); // Call the fetchCourse function
  }, []);

  if (!course) return <div>Course does not exist.</div>;

  return (
    <form
      className="w-50 m-auto"
      onSubmit={async (e) => {
        e.preventDefault();

        const data = {
          code: courseCode.current.value,
          title: courseName.current.value,
          section: section.current.value,
          semester: semester.current.value,
        };

        await axios.put(`http://localhost:5000/courses/${id}`, data);

        navigate("/courses");
      }}
    >
      <div className="form-group mb-3">
        <label htmlFor="courseCode">Course Code</label>
        <input
          ref={courseCode}
          type="text"
          className="form-control"
          id="courseCode"
          placeholder="Enter course code"
          defaultValue={course.code}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="courseName">Course Name</label>
        <input
          ref={courseName}
          type="text"
          className="form-control"
          id="courseName"
          placeholder="Enter course name"
          defaultValue={course.title}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="section">Section</label>
        <input
          ref={section}
          type="text"
          className="form-control"
          id="section"
          placeholder="Enter section"
          defaultValue={course.section}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="semester">Semester</label>
        <input
          ref={semester}
          type="text"
          className="form-control"
          id="semester"
          placeholder="Enter semester"
          defaultValue={course.semester}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CourseUpdateForm;
