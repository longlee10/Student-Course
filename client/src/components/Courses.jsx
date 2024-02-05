import React from "react";

const Courses = () => {
  const courses = [
    { id: 1, title: "Course 1" },
    { id: 2, title: "Course 2" },
    { id: 3, title: "Course 3" },
  ];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              className="d-flex flex-row justify-content-between"
            >
              <td>{course.title}</td>
              <td>
                <div>
                  <button className="btn btn-danger mx-3">Delete</button>
                  <button className="btn btn-success">Update</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-secondary">
        <a href="/new-course">Add Course</a>
      </button>
    </>
  );
};

export default Courses;
