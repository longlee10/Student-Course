import React from "react";
import Courses from "./Courses";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CourseRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await axios.get("http://localhost:5000/courses");
      const students = await axios.get(`http://localhost:5000/students/${id}`);

      const coursesTaken = students.data.coursesTaken;

      // console.log("taken: ", coursesTaken);

      const filteredCourses = courses.data.filter(
        (course) =>
          !coursesTaken.some((takenCourse) => takenCourse._id === course._id)
      );

      // console.log("filter: ", filteredCourses);

      setFilteredCourses(filteredCourses);
      // console.log("courses: ", courses.data);
    };
    fetchCourses();
  }, []);

  const register = async (courseId) => {
    const response = await axios.get(`http://localhost:5000/students/${id}`);

    const student = response.data.student;
    console.log(student);

    await axios.put(`http://localhost:5000/students/${student._id}`, {
      email: student.email,
      course: courseId,
    });

    navigate(`/students/${id}`);
  };

  return <Courses register={register} filteredCourses={filteredCourses} />;
};

export default CourseRegistration;
