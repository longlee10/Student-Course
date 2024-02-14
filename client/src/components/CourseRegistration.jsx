import React from "react";
import Courses from "./Courses";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CourseRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const register = async (courseId) => {
    const response = await axios.get(`http://localhost:5000/students/${id}`);

    const student = response.data.student;

    await axios.put(`http://localhost:5000/students/${student._id}`, {
      email: student.email,
      course: courseId,
    });

    navigate(`/students/${id}`);
  };

  return <Courses register={register} />;
};

export default CourseRegistration;
