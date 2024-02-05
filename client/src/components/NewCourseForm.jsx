import React from "react";

const NewCourseForm = () => {
  return (
    <form className="w-50 m-auto">
      <div className="form-group mb-3">
        <label htmlFor="courseCode">Course Code</label>
        <input
          type="text"
          className="form-control"
          id="courseCode"
          placeholder="Enter course code"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="courseName">Course Name</label>
        <input
          type="text"
          className="form-control"
          id="courseName"
          placeholder="Enter course name"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="section">Section</label>
        <input
          type="text"
          className="form-control"
          id="section"
          placeholder="Enter section"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="semester">Semester</label>
        <input
          type="text"
          className="form-control"
          id="semester"
          placeholder="Enter semester"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default NewCourseForm;
