import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Courses = ({ register, filteredCourses }) => {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    readCookie();

    if (filteredCourses) {
      setCourses(filteredCourses);
    } else {
      axios
        .get("http://localhost:5000/courses")
        .then((res) => setCourses(res.data))
        .catch((err) => console.log(err));
    }
  }, [filteredCourses]);

  const readCookie = async () => {
    try {
      const res = await axios.get("http://localhost:5000/read_cookie");
      if (res.data.screen !== "auth") {
        navigate("/login");
      }
      console.log(res.data.screen);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRegister = (courseId) => {
    register(courseId);
  };

  return (
    <div className="">
      {courses.length > 0 ? (
        <>
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
                        className="btn btn-success me-3"
                      >
                        Update
                      </Link>

                      {id && (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleRegister(course._id)}
                        >
                          Register
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className="btn btn-primary" to="/new-course">
            Add Course
          </Link>
        </>
      ) : (
        <div>
          <h1>No courses available to register.</h1>
          <Link className="btn btn-primary" to="/students">
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default Courses;
