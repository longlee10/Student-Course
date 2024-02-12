import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-75 m-auto">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Program</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>View Student Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.program}</td>
              <td>{student.email}</td>
              <td>{`${student.address}, ${student.city}`}</td>
              <td>{student.phoneNumber}</td>
              <td>
                <Link to={`/students/${student._id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="btn btn-primary" to="/new-student">
        Add Student
      </Link>
    </div>
  );
};

export default Students;
