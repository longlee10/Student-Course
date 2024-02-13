import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-50 m-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Section</th>
            <th>Semester</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.code}</td>

              <td>
                <Link to={`/courses/${course._id}`}>{course.title}</Link>
              </td>
              <td>{course.section}</td>
              <td>{course.semester}</td>
              <td>
                <div>
                  <Link
                    to={`/courses/${course._id}/update`}
                    className="btn btn-success"
                  >
                    Update
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="btn btn-primary" to="/new-course">
        Add Course
      </Link>
    </div>
  );
};

export default Courses;
