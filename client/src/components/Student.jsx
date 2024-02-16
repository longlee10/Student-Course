import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Courses from "./Courses";
import Login from "./Login";

const Student = () => {
  const [student, setStudent] = useState(null);
  const [coursesTaken, setCoursesTaken] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/students/${id}`
        );

        setStudent(response.data.student); // Set the course data to the state
        setCoursesTaken(response.data.coursesTaken);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchData(); // Call the fetchCourse function
  }, []);

  if (!student) return null;

  return (
    <div className="w-75 m-auto">
      <h1>Student Details</h1>
      <p>Student number: {student.studentNumber}</p>
      <p>
        Student name: {student.firstName} {student.lastName}
      </p>
      <p>Phone number {student.phoneNumer}</p>
      <p>Email: {student.email}</p>
      <p>Program: {student.program}</p>
      <p>
        Address: {student.address} {student.city}
      </p>

      {coursesTaken.length > 0 && (
        <>
          <p>My Courses:</p>
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Section</th>
                <th>Semester</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {coursesTaken.map((course) => (
                <tr key={course._id}>
                  <td>{course.code}</td>
                  <td>{course.title}</td>
                  <td>{course.section}</td>
                  <td>{course.semester}</td>
                  <td>
                    <button
                      onClick={() => {
                        setCoursesTaken(
                          coursesTaken.filter((c) => c._id !== course._id)
                        );
                        axios
                          .post(`http://localhost:5000/students/${id}`, {
                            email: student.email,
                            courseId: course._id,
                          })
                          .catch((err) =>
                            console.error("Error dropping course:", err)
                          );
                      }}
                      className="btn btn-danger me-3"
                    >
                      Drop
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <Link className="btn btn-primary" to={`/students/${id}/register`}>
        Register Courses
      </Link>
    </div>
  );
};

export default Student;
