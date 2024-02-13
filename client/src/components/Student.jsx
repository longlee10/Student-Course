import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Student = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/students/${id}`
        );
        console.log(response.data);
        setStudent(response.data); // Set the course data to the state
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchData(); // Call the fetchCourse function
  }, []);

  if (!student) return <div>Student does not exist.</div>;

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
    </div>
  );
};

export default Student;
