import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Student = () => {
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/students/${id}`
        );

        setStudent(response.data.student); // Set the course data to the state
        setCourses(response.data.coursesTaken);
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

      {courses.length > 0 && (
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
              {courses.map((course) => (
                <tr key={course._id}>
                  <td>{course.code}</td>
                  <td>{course.title}</td>
                  <td>{course.section}</td>
                  <td>{course.semester}</td>
                  <td>
                    <button
                      onClick={() => {
                        setCourses(courses.filter((c) => c._id !== course._id));
                        axios
                          .post(`http://localhost:5000/students/${id}`, {
                            email: student.email,
                            courseId: course._id,
                          })
                          .catch((err) =>
                            console.error("Error dropping course:", err)
                          );
                      }}
                      className="btn btn-danger"
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
    </div>
  );
};

export default Student;
