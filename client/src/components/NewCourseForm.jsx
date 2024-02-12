import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewCourseForm = () => {
  const courseCode = useRef(null);
  const courseName = useRef(null);
  const section = useRef(null);
  const semester = useRef(null);

  const navigate = useNavigate();

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

        await axios.post("http://localhost:5000/courses", data);

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
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default NewCourseForm;
