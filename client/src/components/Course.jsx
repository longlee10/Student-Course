import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [student, setStudents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/courses/${id}`);
        setCourse(response.data.course);
        setStudents(response.data.students);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchData();
  }, []);

  if (!course) return null;

  return (
    <div className="w-75 m-auto">
      <h1>Course Details</h1>
      <p>Course code: {course.code}</p>
      <p>Course title: {course.title}</p>
      <p>Section: {course.section}</p>
      <p>Semester: {course.semester}</p>

      <strong>Student enrolled: </strong>
      {student.length > 0 ? (
        <>
          {student.map((student) => (
            <div key={student._id}>
              <div>
                Student name: {student.firstName} {student.lastName}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>No student enrolled in this course.</p>
      )}
    </div>
  );
};

export default Course;
