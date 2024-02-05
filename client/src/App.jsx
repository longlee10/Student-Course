import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import Student from "./components/Students";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewCourseForm from "./components/NewCourseForm";
import NewStudentForm from "./components/NewStudentForm";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/new-course" element={<NewCourseForm />} />
        <Route path="/new-student" element={<NewStudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
