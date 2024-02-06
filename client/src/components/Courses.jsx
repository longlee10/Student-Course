import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-50 m-auto">
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

      <Link className="btn btn-primary" to="/new-course">
        Add Course
      </Link>
    </div>
  );
};

export default Courses;
