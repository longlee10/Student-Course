import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import Students from "./components/Students";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewCourseForm from "./components/NewCourseForm";
import NewStudentForm from "./components/NewStudentForm";
import CourseUpdateForm from "./components/CourseUpdateForm";
import Login from "./components/Login";
import Student from "./components/Student";
import Course from "./components/Course";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students">
          <Route element={<Students />} />
          <Route path=":id" element={<Student />} />
        </Route>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses">
          <Route element={<Courses />} />
          <Route path=":id" element={<Course />} />
          <Route path=":id/update" element={<CourseUpdateForm />} />
        </Route>
        <Route path="/new-course" element={<NewCourseForm />} />
        <Route path="/new-student" element={<NewStudentForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
